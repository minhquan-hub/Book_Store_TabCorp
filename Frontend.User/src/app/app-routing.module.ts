import { AdminComponent } from "./components/admin/admin.component";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import  { AuthGuard } from '../app/_helpers/auth.guard';
import { Role } from './models/role';
import { CreateBookComponent } from "./components/create-book/create-book.component";
import { UpdateBookComponent } from "./components/update-book/update-book.component";
import { BookDetailComponent } from "./components/book-detail/book-detail.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'book-detail/:id', component: BookDetailComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: {roles : [Role.Admin]}},
  {path: 'admin/create', component: CreateBookComponent, canActivate: [AuthGuard], data: {roles : [Role.Admin]}},
  {path: 'admin/update/:id', component: UpdateBookComponent, canActivate: [AuthGuard], data: {roles : [Role.Admin]}},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
