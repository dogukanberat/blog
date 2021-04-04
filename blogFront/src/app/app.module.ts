import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SlideshowModule} from 'ng-simple-slideshow';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SliderComponent} from './index/slider/slider.component';
import {SliderAddComponent} from './event/slider-add/slider-add.component';
import {ContentComponent} from './index/content/content.component';
import {HeaderComponent} from './index/header/header.component';
import {FooterComponent} from './index/footer/footer.component';
import {ProductComponent} from './product/product.component';
import {IndexComponent} from './index/index.component';
import {ProductContentComponent} from './product/content/content.component';
import {EventComponent} from './event/event.component';
import {EventService} from './event.service';
import {RichTextEditorAllModule} from '@syncfusion/ej2-angular-richtexteditor';
import {CategoryComponent} from './event/category/category.component';
import {EventsComponent} from './event/events/events.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ClarityModule} from '@clr/angular';
import {FooterlinkComponent} from './event/footerlink/footerlink.component';
import {AddpageComponent} from './event/addpage/addpage.component';
import {PagesComponent} from './pages/pages.component';
import {PagesContentComponent} from './pages/content/content.component';
import {FileuploadComponent} from './event/fileupload/fileupload.component';
import {ToastrModule} from 'ngx-toastr';
import {FileUploadModule} from 'ng2-file-upload';
import {UsersComponent} from './event/users/users.component';
import {FollowersComponent} from './event/followers/followers.component';
import {AddleftmenuComponent} from './event/addleftmenu/addleftmenu.component';
import {CategoriesComponent} from './categories/categories.component';
import {LeftmenuComponent} from './categories/leftmenu/leftmenu.component';
import {CatComponent} from './categories/cat/cat.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    IndexComponent,
    ProductContentComponent,
    EventComponent,
    CategoryComponent,
    EventsComponent,
    SliderAddComponent,
    FooterlinkComponent,
    AddpageComponent,
    PagesComponent,
    PagesContentComponent,
    FileuploadComponent,
    UsersComponent,
    FollowersComponent,
    AddleftmenuComponent,
    LeftmenuComponent,
    CategoriesComponent,
    CatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
    ReactiveFormsModule,
    HttpClientModule,
    RichTextEditorAllModule,
    BrowserAnimationsModule,
    ClarityModule,
    ToastrModule.forRoot(), // ToastrModule added
    FileUploadModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
