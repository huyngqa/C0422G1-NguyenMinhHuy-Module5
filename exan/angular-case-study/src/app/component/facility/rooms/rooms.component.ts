import {Component, OnInit} from '@angular/core';
import {Facility} from '../../../model/facility/facility';
import {FacilityService} from '../../../service/facility/facility.service';
import Swal from 'sweetalert2';

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
  };

  getDetails(id: number) {
    this.facilityService.findFacilityById(id).subscribe(facility => {
      this.facility = facility;
    });
  }

  removeFacility(id: number) {
    this.facilityService.deleteFacilityById(id).subscribe(success => {

    })
  }

  showInfoDeleteModal(id: number, name: string) {
    Swal.fire({
      title: `Bạn có muốn xoá khách hàng ${name} không?`,
      text: "This process cannot be undone!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có!',
      cancelButtonText: 'Không'
    }).then((result) => {
      if (result.isConfirmed) {
        this.facilityService.deleteFacilityById(id).subscribe(success => {
          Swal.fire(
            'Đã xoá!',
            'Bạn đã xoá thành công.',
            'success'
          )
          this.getFacilities();
        });
      }
    })
  }
}
