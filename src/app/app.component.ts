import {Component} from '@angular/core';
import {Task} from './task/task';
import {CdkDragDrop, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    todo: Task[] = [
        {
          title: 'Finalize angular leaning',
          description: 'I need to master angular leaning before the end of this month'
        },
        {
          title: 'Buy a new computer',
          description: 'My current computer is getting slow so I need to get a faster computer'
        }
    ];
    inProgress: Task[] = [];
    done: Task[] = [];

    editTask(list: string, task: Task): void {

    }

    drop(event: CdkDragDrop<Task[]>): void {
        if (event.previousContainer === event.container) {
            return;
        }
        console.log('drop executed');
        transferArrayItem(
            event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex
        );
    }
}
