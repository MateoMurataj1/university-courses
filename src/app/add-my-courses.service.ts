import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { pipe } from 'rxjs';
import {map, take} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AddMyCoursesService {
  subscribe: any;
  pipe: any;
  then: any;
  find() {
    throw new Error('Method not implemented.');
  }

  constructor(private db: AngularFireDatabase) { }

  cart: any;

  /*async addToCart(course: any){
    let cartId = localStorage.getItem('cartId');
    if(!cartId){
      this.cart = await this.db.list('/my-courses').push({
        dateCreated: new Date().getTime()
      });
      localStorage.setItem('cartId',this.cart.key)
      this.addCourseCart(this.cart.key,course)
    }
    else{
      this.addCourseCart(localStorage.getItem('cartId'),course)
    }
  }

  addCourseCart(idCart: any, courseAdd: any){
    console.log('addCourse',courseAdd);
    this.db.object('/my-courses/'+ courseAdd.key).snapshotChanges().pipe(take(1))
     /                                                                   .subscribe(courseCart=>{
                                                                          console.log(courseCart);
                                                                          if(!courseCart.key){
                                                                            this.db.list('/my-courses/').set(courseAdd.key, courseAdd.payload.val());
                                                                          }
                                                                        });
  }*/

  async addToCart(course: any){
    let cartId = localStorage.getItem('cartId');
    if(!cartId){
      this.cart = await this.db.list('/my-courses/').push({
        dateCreated: new Date().getTime()
      });
      localStorage.setItem('cartId',this.cart.key)
      this.addCourseCart(this.cart.key,course)
    }
    else{
      this.addCourseCart(localStorage.getItem('cartId'),course)
    }
  }

  addCourseCart(idCart: any, courseAdd: any){
    console.log('addCourse',courseAdd);
    this.db.object('/my-courses/'+ idCart + '/items/' + courseAdd.key).snapshotChanges().pipe(take(1))
                                                                        .subscribe(courseCart=>{
                                                                          console.log(courseCart);
                                                                          if(!courseCart.key){
                                                                            this.db.list('/my-courses/' + idCart + '/items/').set(courseAdd.key,  courseAdd.payload.val());
                                                                          }
                                                                        });
  }

  getListItems(){
    let cartId = localStorage.getItem('cartId');
    return this.db.list('/my-courses/' + cartId + '/items/').snapshotChanges() 
  }

  getListItemsShoppingCart1(){
    let cartId = localStorage.getItem('cartId');
    return this.db.list('/my-courses/' + cartId + '/items/').snapshotChanges() 
  }
}
