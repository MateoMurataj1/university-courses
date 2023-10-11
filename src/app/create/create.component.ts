import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  courses$: any;

  constructor(private coursesService: CoursesService) {

    this.courses$=this.coursesService.getAll();

  }

  delete(courseId: any){
    if(confirm('Deshironi ta fshini kursin?')){
      this.coursesService.delete(courseId);
    }
  }

  ngOnInit(): void {
  }

}
