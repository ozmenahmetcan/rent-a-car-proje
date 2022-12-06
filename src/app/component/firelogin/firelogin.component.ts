import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-firelogin',
  templateUrl: './firelogin.component.html',
  styleUrls: ['./firelogin.component.scss']
})
export class FireloginComponent implements OnInit {

  email: string = '';
  password: string = '';
  

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  login() {

    if (this.email == '') {
      alert('Lütfen mailinizi girin');
      return;
    }

    if (this.password == '') {
      alert('Lütfen şifrenizi girin');
      return;
    }

    this.auth.login(this.email,this.password);

    this.email = '';
    this.password = '';

  }
  
} 
