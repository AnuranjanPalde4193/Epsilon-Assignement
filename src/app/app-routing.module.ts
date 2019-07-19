import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { FormsComponent } from './components/forms/forms.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {
    path: 'card', component: CardComponent
  },
  { path: 'table', component: TableComponent },
  { path: 'forms', component: FormsComponent },
  {
    path: '', redirectTo: '/card', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
