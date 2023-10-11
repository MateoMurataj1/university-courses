import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private db: AngularFireDatabase) { }

  create(courses:any){
    return this.db.list('/courses').push(courses);
  }

  getAll(){
    return this.db.list('/courses').snapshotChanges();
  }

  get(coursesId: any){
    return this.db.object('/courses/' + coursesId).snapshotChanges();
  }

  update(coursesId: any, courses: any){
    return this.db.object('/courses/' + coursesId).update(courses);
  }

  delete(coursesId: any){
    return this.db.object('/courses/' + coursesId).remove();
  }

  getMyCourses(){
    return this.db.list('/my-courses').snapshotChanges();
  }
}
