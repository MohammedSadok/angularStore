import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { RootLayaoutComponent } from './pages/root-layaout/root-layaout.component';
// import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';

const routes: Routes = [
  {
    path: 'main',
    component: RootLayaoutComponent,
    children: [
      {
        path: 'product',
        component: ProductComponent,
        children: [
          { path: 'add', component: AddComponent },
          { path: 'list', component: ListComponent },
          // { path: 'list', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        ],
      },
    ],
  },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
