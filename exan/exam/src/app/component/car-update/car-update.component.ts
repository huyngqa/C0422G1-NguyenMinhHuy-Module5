import { Component, OnInit } from '@angular/core';
import {CarService} from '../../service/car.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {
  formCar: FormGroup;
  id:number;
  message: string = '';
  constructor(private carService: CarService,
              private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.carService.getCarById(this.id).subscribe(carTemp => {
        this.formCar = new FormGroup({
          id: new FormControl(carTemp.id),
          type: new FormControl(carTemp.type, [Validators.required]),
          nameHomeCar: new FormControl(carTemp.nameHomeCar, [Validators.required]),
          goStart: new FormControl(carTemp.goStart),
          goEnd: new FormControl(carTemp.goEnd),
          phone: new FormControl(carTemp.phone, [Validators.required, Validators.pattern('^((097)|(093)|(090))\\d{7}$')]),
          email: new FormControl(carTemp.email, [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
          dateStart: new FormControl(carTemp.dateStart),
          dateEnd: new FormControl(carTemp.dateEnd)
        })
      });
    })
  }

  ngOnInit(): void {
  }

  submit() {
    let car =this.formCar.value;
    if(this.formCar.valid) {
      this.carService.updateCar(car.id, car).subscribe(next => {
        this.router.navigateByUrl('');
      });
    }
  }
}
