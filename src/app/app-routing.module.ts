import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { ArticlesComponent } from './articles/articles.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'products', component: ProductsComponent },
	{ path: 'services', component: ServicesComponent },
	{ path: 'articles', component: ArticlesComponent },
	{ path: 'careers', component: CareersComponent },
	{ path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
