import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AllClubsComponent } from './pages/all-clubs/all-clubs.component';
import { EventsComponent } from './pages/events/events.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { SignInComponent } from './authentification/sign-in/sign-in.component';
import { SignUpClubComponent } from './authentification/sign-up-club/sign-up-club.component';
import { SignUpComponent } from './authentification/sign-up/sign-up.component';

const routes: Routes = [
{path :'' , component: HomeComponent},
{path :'post' , component:SinglePostComponent},
{path :'contact' , component:ContactUsComponent},
{path :'club' , component:AllClubsComponent},
{path :'events' , component:EventsComponent},
{path :'term-conditions' , component:TermsAndConditionsComponent},
{path :'footer' , component:FooterComponent},
{path :'header' , component:HeaderComponent},
{path :'navbar' , component:NavbarComponent},
{path :'comment-form' , component:CommentFormComponent},
{path :'comment-list' , component:CommentListComponent},
{path :'sign-in' , component:SignInComponent},
{path :'sign-up' , component:SignUpComponent},
{path :'sign-up-club' , component:SignUpClubComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
