import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MentorshipRequestPage } from './mentorship-request.page';

const routes: Routes = [
  {
    path: '',
    component: MentorshipRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentorshipRequestPageRoutingModule {}
