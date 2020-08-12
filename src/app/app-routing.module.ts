import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'transaction',
    pathMatch: 'full'
  },
  {
    path: 'transaction',
    loadChildren: () => import('./main/transaction/transaction.module').then(m => m.TransactionModule)
  },
  {
    path: '**',
    redirectTo: 'transaction'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
