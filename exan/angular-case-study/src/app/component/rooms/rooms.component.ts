import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  facilities: Facility[] = [
    {
      facilityId: 1,
      facilityName: 'Villa1',
      area: 3.5,
      numOfFloor: 4,
      maxOfPeople: 10,
      costs: 500000,
      status: 'a'
    },
    {
      facilityId: 2,
      facilityName: 'Villa2',
      area: 4,
      numOfFloor: 6,
      maxOfPeople: 20,
      costs: 1000000,
      status: 'a'
    },
    {
      facilityId: 3,
      facilityName: 'House1',
      area: 2,
      numOfFloor: 4,
      maxOfPeople: 6,
      costs: 500000,
      status: 'a'
    },
    {
      facilityId: 4,
      facilityName: 'Room1',
      area: 2,
      numOfFloor: 3,
      maxOfPeople: 7,
      costs: 700000,
      status: 'a'
    }];

  constructor() {
  }

  ngOnInit(): void {
  }
}
