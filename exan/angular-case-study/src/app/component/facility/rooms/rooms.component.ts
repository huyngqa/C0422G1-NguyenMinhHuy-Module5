import {Component, OnInit} from '@angular/core';
import {Facility} from '../../../model/facility/facility';
import {FacilityService} from '../../../service/facility/facility.service';
import 'src/assets/js/custom-carousel.js';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  facilities: Facility[] = [];
  facility: Facility = null;

  constructor(private facilityService: FacilityService) {
    this.loadScript('/assets/js/custom-carousel.js');
    this.getFacilities();
  }

  ngOnInit(): void {
  }

  getFacilities() {
    return this.facilityService.getAll().subscribe(facilities => {
      this.facilities = facilities;
    });
  }

  loadScript(src) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    document.getElementsByTagName('body')[0].appendChild(script);
    script.src = src;
  }

  getDetails(id: number) {
    this.facilityService.findFacilityById(id).subscribe(facility => {
      this.facility = facility;
    });
  }
}
