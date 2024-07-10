import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { AdminHeaderComponent } from './layouts/admin-header/admin-header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { StudentHeaderComponent } from './layouts/student-header/student-header.component';
import { SharedModule } from '../shared/module/shared.module';
import { FooterTopContainerComponent } from './layouts/footer/footer-top-container/footer-top-container.component';

@NgModule({
  declarations: [
    ComponentsComponent,
    HeaderComponent,
    FooterComponent,
    AdminHeaderComponent,
    StudentHeaderComponent,
    FooterTopContainerComponent,
  ],
  imports: [CommonModule, ComponentsRoutingModule, SharedModule],
})
export class ComponentsModule {}
