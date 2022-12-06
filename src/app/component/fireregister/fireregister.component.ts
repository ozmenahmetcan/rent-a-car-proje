import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-fireregister',
  templateUrl: './fireregister.component.html',
  styleUrls: ['./fireregister.component.scss']
})
export class FireregisterComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  register() {

    if (this.email == '') {
      alert('Lütfen mailinizi girin');
      return;
    }

    if (this.password == '') {
      alert('Lütfen şifrenizi girin');
    }

    this.auth.register(this.email, this.password);

    this.email = '';
    this.password = '';

  }

}
