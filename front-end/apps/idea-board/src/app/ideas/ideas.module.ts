import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdeasRoutingModule } from './ideas-routing.module';
import { IdeasListPage } from './ideas-list/ideas-list.page';
import { IdeasEditPage } from './ideas-edit/ideas-edit.page';
import { IdeasPage } from './ideas.page';
import { RouterModule } from '@angular/router';
import { IdeasListingComponent } from './_components/ideas-listing/ideas-listing.component';

@NgModule({
  declarations: [
    IdeasListPage,
    IdeasEditPage,
    IdeasPage,
    IdeasListingComponent,
  ],
  imports: [CommonModule, RouterModule, IdeasRoutingModule],
})
export class IdeasModule {}
