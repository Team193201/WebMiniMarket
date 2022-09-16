import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../modules/common-component/footer/footer.component';
import { HeaderComponent } from '../../modules/common-component/header/header.component';
import { SliderComponent } from '../../modules/common-component/slider/slider.component';
import { NewProductComponent } from '../../modules/new-product/new-product.component';
import { ProductComponent } from '../../modules/product/product.component';
import { ProductListComponent } from '../../modules/product/product-list/product-list.component';
import { ProductDetailComponent } from '../../modules/product/product-detail/product-detail.component';
import { ProductItemComponent } from '../../modules/product/product-list/product-item/product-item.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    NewProductComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    NewProductComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
  ],


})
export class SharedModule { }
