import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Task } from '../../../task';
import 'rxjs/add/operator/map';


@Injectable()
export class TaskService {
	constructor(private http: Http) {}

	getTasks() {
		return this.http.get('/api/tasks')
			.map(res => res.json());
	}

	addTask(newTask: Task) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http.post('/api/tasks', JSON.stringify(newTask), {headers: headers})
			.map(res => res.json());
	}

	deleteTask(id: string) {
		return this.http.delete('/api/tasks/' + id)
			.map(res => res.json());
	}
}
