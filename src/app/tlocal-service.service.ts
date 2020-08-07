import { PedidoModel } from './pedidoModel';
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

  headers = new HttpHeaders().set('Content-Type','application/json')
  constructor(private http:HttpClient) { }
// Acceso
  register(datos: usuarioModel){
    let data = JSON.stringify(datos)
    return this.http.post(this.urlProxy+'register', data, { headers: this.headers})
  }
  login(datos: LoginModel){
    let data = JSON.stringify(datos)
    return this.http.post(this.urlProxy+'login', data, { headers: this.headers})
  }
// Locales
  listLocales(){
    return this.http.get('/api/local')
  }
  getLocalInfo(id: string){
    return this.http.get('/api/local/'+id)
  }
// Pedido
  postPedido(data) {
    let datos = JSON.stringify(data);
    return this.http.post('/api/pedido', data, {headers: this.headers})
  }

}
