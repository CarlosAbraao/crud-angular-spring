import { Component, OnInit } from '@angular/core';
import { Course } from './../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

 public courses: Course[] = [];
  constructor() {

   }

  ngOnInit(): void {


  }

}
