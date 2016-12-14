import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRouteModule } from './app.route';

// Application Custom components
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
	imports: [BrowserModule, HttpModule, FormsModule, AppRouteModule],
	declarations: [AppComponent, HeaderComponent, WelcomeComponent, TasksComponent, CategoryComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }
