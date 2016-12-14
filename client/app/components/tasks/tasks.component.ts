import { Component } from '@angular/core';
import { TaskService } from './tasks.service';
import { Task } from '../../../task';

@Component({
	moduleId: module.id,
	selector: 'app-tasks',
	templateUrl: 'tasks.component.html'
})
export class TasksComponent {
	tasks: Task[];
	title: string;

	constructor(private taskService: TaskService) {
		this.getAllTasks();
	}

	addTask(event: Event) {
		event.preventDefault();
		var newTask = {
			title: this.title,
			isDone: false
		};

		this.taskService.addTask(newTask)
			.subscribe(task => {
				this.tasks.push(task);
				this.title = '';
			});
	}

	deleteTask(id: string) {
		this.taskService.deleteTask(id)
			.subscribe(res => {
				// refreshing tasks after deleting it.
				this.getAllTasks();
			});
	}

	getAllTasks() {
		this.taskService.getTasks()
			.subscribe(tasks => {
				this.tasks = tasks;
			});
	}

}
