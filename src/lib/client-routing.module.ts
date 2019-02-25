import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@libs/midgard-angular/src/lib/modules/oauth/auth.guard';
import { ClientComponent} from './client.component';

const clientRoutes: Routes = [
  { path: '', component: ClientComponent, canActivate: [AuthGuard]},
  ];

@NgModule({
  imports: [RouterModule.forChild(clientRoutes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
