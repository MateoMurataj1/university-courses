import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/courses.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
   
  courses: any={};
  id: any;
  value=0;
  
  constructor(private coursesService: CoursesService, private route: ActivatedRoute) { 
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.coursesService.get(this.id).subscribe((c: any)=>this.courses=c)
  }

  save(course: any){

    if(this.id) this.coursesService.update(this.id, course)

    else this.coursesService.create(course);
  }

  ngOnInit(): void {
  }

}