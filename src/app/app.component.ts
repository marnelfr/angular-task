import {Component} from '@angular/core';
import {Task} from './task/task';
import {CdkDragDrop, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material/dialog';
import {TastDialogComponent} from './tast-dialog/tast-dialog.component';
import {TaskDialogResult} from './tast-dialog/interface/task-dialog-result';
<<<<<<< HEAD
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

const getObservable = (collection: AngularFirestoreCollection<Task>) => {
    const subject = new BehaviorSubject([]);
    collection.valueChanges({ idField: 'id' }).subscribe((val: Task[]) => {
        subject.next(val);
    });
    return subject;
};
=======
>>>>>>> f2c342c7fb5979df3e8016a779b95409e29cb3b0

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
<<<<<<< HEAD


export class AppComponent {
/*    todo: Task[] = [
=======
export class AppComponent {

    todo: Task[] = [
>>>>>>> f2c342c7fb5979df3e8016a779b95409e29cb3b0
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
<<<<<<< HEAD
*/
    // todo = this.store.collection('todo').valueChanges({idField: 'id'});
    // inProgress = this.store.collection('inProgress').valueChanges({idField: 'id'});
    // done = this.store.collection('done').valueChanges({idField: 'id'});
    todo = getObservable(this.store.collection('todo'));
    inProgress = getObservable(this.store.collection('inProgress'));
    done = getObservable(this.store.collection('done'));

    constructor(private dialog: MatDialog, private store: AngularFirestore) {}
=======

    constructor(private dialog: MatDialog) {}
>>>>>>> f2c342c7fb5979df3e8016a779b95409e29cb3b0

    editTask(list: 'done' | 'todo' | 'inProgress', task: Task): void {
        const dialogRef = this.dialog.open(TastDialogComponent, {
            width: '270px',
            data: {
                task,
                enableDelete: true,
            },
        });
<<<<<<< HEAD
        /*dialogRef.afterClosed().subscribe((result: TaskDialogResult) => {
=======
        dialogRef.afterClosed().subscribe((result: TaskDialogResult) => {
>>>>>>> f2c342c7fb5979df3e8016a779b95409e29cb3b0
            const dataList = this[list];
            const taskIndex = dataList.indexOf(task);
            if (result.delete) {
                dataList.splice(taskIndex, 1);
            } else {
                dataList[taskIndex] = task;
            }
<<<<<<< HEAD
        });*/
        dialogRef.afterClosed().subscribe((result: TaskDialogResult) => {
            if (result.delete) {
                this.store.collection(list).doc(task.id).delete();
            } else {
                this.store.collection(list).doc(task.id).update(task);
            }
=======
>>>>>>> f2c342c7fb5979df3e8016a779b95409e29cb3b0
        });
    }

    newTask(): void {
        const dialogRef = this.dialog.open(TastDialogComponent, {
            width: '270px',
            data: {
                task: {}
            }
        });
<<<<<<< HEAD
        dialogRef.afterClosed().subscribe((result: TaskDialogResult) => this.store.collection('todo').add(result.task));
    }

    /*drop(event: CdkDragDrop<Task[]>): void {
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
    }*/

=======
        dialogRef.afterClosed().subscribe((result: TaskDialogResult) => this.todo.push(result.task));
    }

>>>>>>> f2c342c7fb5979df3e8016a779b95409e29cb3b0
    drop(event: CdkDragDrop<Task[]>): void {
        if (event.previousContainer === event.container) {
            return;
        }
<<<<<<< HEAD
        const item = event.previousContainer.data[event.previousIndex];
        this.store.firestore.runTransaction(() => {
            const promise = Promise.all([
                this.store.collection(event.previousContainer.id).doc(item.id).delete(),
                this.store.collection(event.container.id).add(item),
            ]);
            return promise;
        });
=======
        console.log('drop executed');
>>>>>>> f2c342c7fb5979df3e8016a779b95409e29cb3b0
        transferArrayItem(
            event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex
        );
    }
}
