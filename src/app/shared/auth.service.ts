import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }
  
  // login method
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['dashboard']);

      // if (res.user?.emailVerified == true) {
      //   this.router.navigate(['dashboard']);
      // } else {
      //   this.router.navigate(['/verify-email']);
      // }

    }, err => {
      alert(err.massage);
      this.router.navigate(['/firelogin']);
    })
  }

  //register method

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
      alert('Kayıt olma başarılı');
      this.router.navigate(['/firelogin']);
      // this.sendEmailForVerification(res.user);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  //sign out 
  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/firelogin']);
    }, err => {
      alert(err.message);
    })
  }

  //forgot password
  
  forgotPassword(email: string) {
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/verify-email']);
    }, err => {
      alert('Bir şeyler ters gitti');
    })
  }

  // email verify

  // sendEmailForVerification(user : any) {
  //   user.sendEmailForVarification().then((res : any) => {
  //     this.router.navigate(['/verify-email']);
  //   }, (err: any) => {
  //     alert('Bir şeyler ters gitti, sizin mailinize link göndermek müsait değil')
  //   })
  // }



}
