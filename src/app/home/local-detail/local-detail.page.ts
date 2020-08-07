import { LocalModel } from './../../local-model';
import { TlocalServiceService } from './../../tlocal-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { PedidoPage } from '../modals/pedido/pedido.page'


@Component({
  selector: 'app-local-detail',
  templateUrl: './local-detail.page.html',
  styleUrls: ['./local-detail.page.scss'],
})
export class LocalDetailPage implements OnInit {

  id: string
  localinfo: LocalModel
  usuario: any
  menu: any

  constructor(private actRouter: ActivatedRoute, private router: Router, private tlocalServices: TlocalServiceService, private alertCtrl: AlertController, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.actRouter.paramMap.subscribe( params => {
      const id = params.get('idlocal')

      //console.log("ID:" + id);
      this.tlocalServices.getLocalInfo(id).subscribe( data => {
        
        let datos:any  = data
        this.localinfo = datos.local
        //console.log(datos.local);
        
      })      
    })
    this.usuario = this.router.getCurrentNavigation().extras.state 
   //console.log(this.usuario);
    
  }

  pedido(){
    let datos = this.localinfo.menu
    this.menu = datos.filter(ele => {
      return ele.isCheck === true
    })
    this.modalPedido(this.menu, {_id: this.localinfo._id,name:this.localinfo.name}, this.usuario)
  }

  async modalPedido(datosPedido, datosLocal, datosUsuario) {
    const modal = await this.modalCtrl.create({
      component: PedidoPage,
      componentProps: { 
        pedido: datosPedido,
        local: datosLocal,
        usuario: datosUsuario
      }
      });
      modal.onWillDismiss().then(dataReturned => {
        //console.log('Receive: ', dataReturned.data);
      });
    return await modal.present();
  }


}
