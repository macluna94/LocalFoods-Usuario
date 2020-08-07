import { Router, ActivatedRoute } from '@angular/router';
import { TlocalServiceService } from './../tlocal-service.service';
import { Component, OnInit } from '@angular/core';
import { usuarioModel } from "../usuario-model";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  locales: any
  user: string
  iduser: string
  constructor( private tlocalServices: TlocalServiceService, public activeRouter: ActivatedRoute, private router: Router) {}

  ngOnInit(){
   
    this.activeRouter.paramMap.subscribe(params => {
      this.user = params.get('user');
      this.iduser = params.get('_idUser')
      //console.log(this.user);
      //console.log(this.iduser);
      
      this.tlocalServices.listLocales().subscribe(data => {
        this.locales = data
      })
    })

  }

  goToLocal(id: string){
    this.router.navigate(['/home',id], 
    {
      state: 
      { 
        usuario: this.user,
        iduser: this.iduser
      }
    })
  }
}