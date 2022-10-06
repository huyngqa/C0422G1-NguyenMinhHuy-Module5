import { Component, OnInit } from '@angular/core';
import {CarService} from '../../service/car.service';
import {Car} from '../../model/car';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Car[] = []

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }
  getCars() {
    this.carService.getAllCar().subscribe( cars => {
      this.cars = cars.content;
    })
  }

  deleteCar(id: number) {
    Swal.fire({
      title: "Xác nhận",
      text: `Bạn có đồng ý xoá thông tin của xe khách có sô xe ${id}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có!',
      cancelButtonText: 'Không'
    }).then((result) => {
      if (result.isConfirmed) {
        this.carService.deleteCarById(id).subscribe(success => {
          Swal.fire(
            'Đã xoá!',
            'Bạn đã xoá thành công.',
            'success'
          )
          this.getCars();
        });
      }
    })
  }

  showCarDetail(id: number) {
    this.carService.getCarById(id).subscribe(car => {
      Swal.fire({
        title: `<strong>Thông tin chi tiết chiếc xe ${id}</strong>`,
        icon: 'info',
        html: `
                <p>Biển số xe: ${id}</p>
                <p>Loại xe: ${car.type}</p>
                <p>Điểm đi: ${car.goStart}</p>
                <p>Điểm đến: ${car.goEnd}</p>
                <p>Giờ đi: ${car.dateStart}</p>
                <p>Giờ đế: ${car.dateEnd}</p>
                <p>Tên nhà xe: ${car.nameHomeCar}</p>
                <p>Số điện thoại nhà xe: ${car.phone}</p>
                <p>Email nhà xe: ${car.email}</p>
                `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!'
      });
    });
  }
}
