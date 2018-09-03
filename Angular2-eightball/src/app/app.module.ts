import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { QuestListComponent } from './quest-list.component';

const appRoutes: Routes = [
  { path: '**', component: QuestListComponent }
];

@NgModule({
  imports:      [ BrowserModule, HttpClientModule,
                RouterModule.forRoot(appRoutes) ],
  declarations: [ ],
  providers:    [ ],
  bootstrap:    [ ]
})

export class AppModule { }
