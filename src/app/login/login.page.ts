import { TlocalServiceService } from './../tlocal-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  isSumitted = false;
  resp: any = {}
  constructor(private toastCtrl: ToastController,private formBuild: FormBuilder, private tlocalServices: TlocalServiceService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuild.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  get errorControl(){
    return this.loginForm.controls;
    }

  submitLogin(){
    this.isSumitted = true;
    if (!this.loginForm.valid) {
      console.log('Datos incompletos')
    } else {
      let datos = this.loginForm.value
      this.tlocalServices.login(datos).subscribe(result => {
        this.resp = result
        console.log(this.resp.usuario.usuario);
        
        this.checkToast('Bienvenido',this.resp.usuario.usuario, 'primary')
        this.router.navigate(['/home'])
        
      }, err => {
        this.resp = err
        console.log(this.resp.error.err.message);
        let msn = this.resp.error.err.message
        this.checkToast('Algo salio mal',msn, 'danger' )
        
      })
    }
  }

  async checkToast(title: string,msn: string, color: string){
    const toast = await this.toastCtrl.create({
      header: title,
      message: msn,
      duration: 2000,
      position: 'bottom',
      color: color,
      mode:'md'
    });
    toast.present();
  }
}