import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  _fireAuth: any;
  _router: any;

  constructor() { }

  ngOnInit(): void {
  }

  // Send Email Verification

  SendVerficationEmail(user: any){



    this._fireAuth.currentUser.then((u: { sendEmailVerification: () => any; }) => u?.sendEmailVerification())

      .then(() =>{

        this._router.navigate(['/verify-email']);

      }, (err: any) =>{

          alert('Something Went Wrong. Not able to send mail to registered Email.');

      })



  }

}
