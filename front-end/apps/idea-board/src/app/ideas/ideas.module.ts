import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdeasRoutingModule } from './ideas-routing.module';
import { IdeasListPage } from './ideas-list/ideas-list.page';
import { IdeasEditPage } from './ideas-edit/ideas-edit.page';
import { IdeasPage } from './ideas.page';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [IdeasListPage, IdeasEditPage, IdeasPage],
  imports: [CommonModule, RouterModule, IdeasRoutingModule],
})
export class IdeasModule {}
