import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountryService } from './shared/county.service';
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatTableModule} from '@angular/material/table';
import{MatSortModule} from '@angular/material/sort';
import{MatPaginatorModule} from '@angular/material/paginator';
import{MatInputModule} from '@angular/material/input';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})

export class AppModule { }
