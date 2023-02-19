import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContainerComponent } from './components/container/container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import {SecurityContext} from '@angular/core'
import { MarkdownModule} from "ngx-markdown";
import { SafePipe } from './pipes/safe-pipe.pipe';
import { AboutComponent } from './components/about/about.component';







@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SidebarComponent,
    ContainerComponent,
    NotFoundComponent,
    SafePipe,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    BrowserAnimationsModule,
    PdfViewerModule,
    MarkdownModule.forChild(),
    NgxJsonViewerModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
   

    
 

    //NgMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
