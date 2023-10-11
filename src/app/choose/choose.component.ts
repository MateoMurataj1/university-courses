import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { find } from 'rxjs/operators';
import { AddMyCoursesService } from '../add-my-courses.service';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent implements OnInit {

  courses$: any;
  total: any;
  courses!: any[];
  disabled!: boolean;

  constructor(private coursesService: CoursesService, private addMyCoursesService: AddMyCoursesService,private db: AngularFireDatabase) {
    this.courses$ = this.coursesService.getAll();
  }

  addToCart(courses: any){
    this.addMyCoursesService.addToCart(courses);
    if(courses.key){
      this.total = courses.payload.val().quantity +1;
      this.db.list('/courses/').update(courses.key, {quantity :this.total})
    } 
  }

  addToCart1(){
    this.addMyCoursesService.getListItemsShoppingCart1
  }

  ngOnInit(): void {
  }
}
