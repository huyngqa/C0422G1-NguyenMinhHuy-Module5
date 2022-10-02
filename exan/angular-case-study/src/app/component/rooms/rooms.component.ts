import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility.service';
import {$} from 'protractor';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  facilities: Facility[] = [];
  constructor(private facilityService: FacilityService) {
    this.loadScript('/assets/js/custom-carousel.js');
  }

  ngOnInit(): void {
    this.facilities = this.facilityService.getAll();
  }
  // // @ts-ignore
  // // tslint:disable-next-line:only-arrow-functions
  // $(document).ready(function() {
  //   $('.room_carousel .owl-carousel').owlCarousel({
  //     loop: true,
  //     margin: 10,
  //     nav: true,
  //     navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
  //     autoplay: true,
  //     autoplayTimeout: 3000,
  //     autoplayHoverPause: true,
  //     items: 1,
  //   });
  // });
  loadScript(src) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    document.getElementsByTagName('body')[0].appendChild(script);
    script.src = src;
  }
}
