import {  PedidoModel} from './../../../pedidoModel';
import {  TlocalServiceService} from './../../../tlocal-service.service';
import {  Component, OnInit,  Input} from '@angular/core';
import { ModalController} from '@ionic/angular';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {

  @Input() pedido: [{
    _id: string,
    name: string,
    price: number
  }]

  @Input() local: [{
    _id: string,
    name: string,
  }]
  @Input() usuario: [{
    iduser: string,
    usuario: string,
  }]

  total = 0

  tmpPedido: PedidoModel

  constructor(public modalCtrl: ModalController, private tlocalServices: TlocalServiceService) {}

  ngOnInit() {
    //console.log(this.pedido);
    let i = 0
    for (let item of this.pedido) {
      this.total = this.total + item.price
    }

  }

  closeModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      "pedido": this.pedido
    });
  }


  sendPedido() {
    let dataLocal: any = this.local
    let dataUsuario: any = this.usuario
    let pedido: any = this.pedido
    let data = {
      local: dataLocal.name,
      usuario: dataUsuario.usuario,
      repartidor: null,
      total: this.total,
      articulos: pedido,
      fecha: new Date().toLocaleString('es-MX').toString(),
      estado: 'salida'
    }

    //console.log(data);
    this.tlocalServices.postPedido(data).subscribe(res => {
      //console.log(res);
      this.modalCtrl.dismiss()
    })

  }

}