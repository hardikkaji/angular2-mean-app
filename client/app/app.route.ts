import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Application components
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { CategoryComponent } from './components/category/category.component';

const appRoutes: Routes = [
	{
		path: '',
		component: WelcomeComponent
	},
	{
		path: 'tasks',
		component: TasksComponent
	},
	{
		path: 'categories',
		component: CategoryComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRouteModule { }
