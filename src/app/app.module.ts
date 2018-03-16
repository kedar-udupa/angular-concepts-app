import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ServerConnectService } from './server-connect.service';
import { WordCountPipe } from './word-count.pipe';
import { ServiceComponent } from './service/service.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  { path: 'forms', component: FormsComponent },
  { path: 'ComponentInteractions', component: ParentComponent },
  { path: 'Interpolation', component: InterpolationComponent },
  { path: 'Service', component: ServiceComponent },
  { path: 'Pipes', component: PipesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormsComponent,
    ParentComponent,
    ChildComponent,
    InterpolationComponent,
    WordCountPipe,
    ServiceComponent,
    PipesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ServerConnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
