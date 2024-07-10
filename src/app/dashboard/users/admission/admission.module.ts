import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  
import { AdmissionRoutingModule } from './admission-routing.module';
import { AdmissionComponent } from './admission.component';
@NgModule({
  declarations: [AdmissionComponent],
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule,  
    AdmissionRoutingModule
  ],
})
export class AdmissionModule {}
