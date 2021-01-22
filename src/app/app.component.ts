import {Component} from '@angular/core';
import {Task} from './task/task';
import {CdkDragDrop, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material/dialog';
import {TastDialogComponent} from './tast-dialog/tast-dialog.component';
import {TaskDialogResult} from './tast-dialog/interface/task-dialog-result';

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

    constructor(private dialog: MatDialog) {}

    editTask(list: string, task: Task): void {

    }

    newTask(): void {
        const dialogRef = this.dialog.open(TastDialogComponent, {
            width: '270px',
            data: {
                task: {}
            }
        });
        dialogRef.afterClosed().subscribe((result: TaskDialogResult) => this.todo.push(result.task));
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
