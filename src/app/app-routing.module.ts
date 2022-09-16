import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { NewProductComponent } from './modules/new-product/new-product.component';
import { ProductDetailComponent } from './modules/product/product-detail/product-detail.component';
import { ProductListComponent } from './modules/product/product-list/product-list.component';
import { ProductComponent } from './modules/product/product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'newProdouct', component: NewProductComponent },
  {
    path: '', component: ProductComponent, children: [
      {
        path: 'products/:id', component: ProductListComponent,
      },
      {path: 'products/:id/detail/:id', component: ProductDetailComponent},
    ]
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
