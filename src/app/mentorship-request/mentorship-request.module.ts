import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MentorshipRequestPageRoutingModule } from './mentorship-request-routing.module';

import { MentorshipRequestPage } from './mentorship-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MentorshipRequestPageRoutingModule
  ],
  declarations: [MentorshipRequestPage]
})
export class MentorshipRequestPageModule {}
