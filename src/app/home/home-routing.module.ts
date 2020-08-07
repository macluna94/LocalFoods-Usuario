import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'local-detail',
    loadChildren: () => import('./local-detail/local-detail.module').then( m => m.LocalDetailPageModule)
  },
  {
    path: 'pedido',
    loadChildren: () => import('./modals/pedido/pedido.module').then( m => m.PedidoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
