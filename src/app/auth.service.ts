import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AppUser } from 'src/models/app-user';
import { UserService } from './user.service';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.default.User | null>

  constructor(private afAuth: AngularFireAuth, private userService: UserService) {

    this.user$ = afAuth.authState;
   }

  login(){
    this.afAuth.signInWithRedirect(new firebase.default.auth.GoogleAuthProvider())
  }

  logout(){
    this.afAuth.signOut();
  }

  get appUser$() : Observable<AppUser>{
    return this.user$.pipe(switchMap(user => {
      if(user) return this.userService.get(user.uid);

      return of(null);
    }));
  }
}
