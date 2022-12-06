import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>("https://fd7cc923-048e-4001-b3e7-338d1bd7b872.mock.pstmn.io/images?images&=sda")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}

