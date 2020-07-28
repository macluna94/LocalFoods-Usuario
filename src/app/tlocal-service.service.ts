import { usuarioModel } from './usuario-model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from './login-model';

@Injectable({
  providedIn: 'root'
})
export class TlocalServiceService {

  url = "http://localhost:5000/api/"
  urlProxy= '/api/usuario/'
  constructor(private http:HttpClient) { }

  register(datos: usuarioModel){
    let headers = new HttpHeaders().set('Content-Type','application/json');
    let data = JSON.stringify(datos)

    return this.http.post(this.urlProxy+'register', data, { headers: headers})

  }

  login(datos: LoginModel){
    let headers = new HttpHeaders().set('Content-Type','application/json');
    let data = JSON.stringify(datos)

    return this.http.post(this.urlProxy+'login', data, { headers: headers})
  }




}
