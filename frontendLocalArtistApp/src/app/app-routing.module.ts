import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { ArtistTokenComponent } from './artist-token/artist-token.component';
import { ArtistWorksComponent } from './artist-works/artist-works.component';
import { ContactComponent } from './contact/contact.component';
import { CustGuard } from './cust.guard';
import { GalleryComponent } from './gallery/gallery.component';
import { Home1Component } from './home1/home1.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { SelectTokenComponent } from './select-token/select-token.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopSelectComponent } from './shop-select/shop-select.component';
import { ShopSigninComponent } from './shop-signin/shop-signin.component';
import { ShopSignupComponent } from './shop-signup/shop-signup.component';
import { ShopTokensComponent } from './shop-tokens/shop-tokens.component';
import { ShopGuard } from './shop.guard';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserTokenViewComponent } from './user-token-view/user-token-view.component';

const routes: Routes = [{path:'home1',component:Home1Component},
                        {path:'shopSignup',component:ShopSignupComponent},
                        {path:'shopSignin',component:ShopSigninComponent},
                        {path:'userSignup',component:UserSignupComponent},
                        {path:'userSignin',component:UserSigninComponent},
                        {path:'admin/artistList',component:ShopListComponent,canActivate:[AdminGuard]},
                        {path:'user/shopSelect',component:ShopSelectComponent, canActivate:[CustGuard]},
                        {path:'user/tokenSelect/:id', component:SelectTokenComponent, canActivate:[CustGuard]},
                        {path:'artist/workupload', component:ShopTokensComponent, canActivate:[ShopGuard]},
                        {path:'user/tokens', component:UserTokenViewComponent, canActivate:[CustGuard]},
                        {path:'contact', component:ContactComponent},
                        {path:'about', component:AboutComponent},
                        {path:'admin',component:AdminComponent},
                        {path:'gallery', component:GalleryComponent},
                        {path:'artist/tokens', component:ArtistTokenComponent, canActivate:[ShopGuard]},
                        {path:'artist/profileUpdate', component:ProfileEditComponent, canActivate:[ShopGuard]},
                        {path:'artist/works', component:ArtistWorksComponent, canActivate:[ShopGuard]},
                        {path:'',redirectTo:'home1',pathMatch:'full'}                                        
                                                                    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
