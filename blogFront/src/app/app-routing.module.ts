import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductComponent} from './product/product.component';
import {IndexComponent} from './index/index.component';
import {EventComponent} from './event/event.component';
import {CategoryComponent} from './event/category/category.component';
import {EventsComponent} from './event/events/events.component';
import {PagesComponent} from './pages/pages.component';
import {CategoriesComponent} from './categories/categories.component';


const routes: Routes = [

  {path: 'metropoladmin', component: EventComponent},
  {path: '', component: IndexComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'product', component: ProductComponent},
  {path: 'categories', component: CategoriesComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
