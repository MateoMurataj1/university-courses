import { Injectable } from '@angular/core';
import { AngularFireDatabase, } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { AppUser } from 'src/models/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }
   
  save(user: firebase.default.User){
    this.db.object('/users/'+user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }
   
  get(uid: string): Observable<any> {
    return this.db.object('/users/' + uid).valueChanges();
 }
}
