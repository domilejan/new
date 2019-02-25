import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';
import { MidgardSharedTranslationModule } from '@libs/midgard-angular/src/lib/modules/translation/translation.shared.module';
import { ContactDetailComponent } from './pages/contact-detail/contact-detail.component';
import { ClientRoutingModule } from './client-routing.module';

@NgModule({
  imports: [
    MidgardSharedTranslationModule,
    ClientRoutingModule,
  ],
  declarations: [ClientComponent],
  exports: [ClientComponent]
})
export class ContactsModule { }
