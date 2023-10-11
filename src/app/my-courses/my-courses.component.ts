import { Component, OnInit } from '@angular/core';
import { AddMyCoursesService } from '../add-my-courses.service';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  courses!: any[];
  
  constructor(private addMyCoursesService: AddMyCoursesService) { }

  ngOnInit(): void {
    this.addMyCoursesService.getListItems().subscribe(courses=>this.courses=courses)
  }

  getTotal(){
    let total: number=0;
    this.courses.forEach(course => {
      total = total + course.payload.val().credits;
    });
    return total;
  }
}
