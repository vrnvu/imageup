import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { ImagesDashComponent } from './components/images-dash/images-dash.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ImageUploadModule } from "angular2-image-upload";

@NgModule({
  declarations: [
    AppComponent,
    ImagesDashComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    ImageUploadModule.forRoot(),
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
