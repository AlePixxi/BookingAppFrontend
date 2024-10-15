import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingsRoutingModule } from './listings-routing.module';
import { ListingsComponent } from './listings.component';
import { ListingsListComponent } from './listings-list/listings-list.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';


@NgModule({
  declarations: [
    ListingsComponent,
    ListingsListComponent,
    ListingDetailsComponent
  ],
  imports: [
    CommonModule,
    ListingsRoutingModule
  ]
})
export class ListingsModule { }
