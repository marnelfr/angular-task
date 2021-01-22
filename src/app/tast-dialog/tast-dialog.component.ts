import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Task} from '../task/task';
import {TaskDialogData} from './interface/task-dialog-data';

@Component({
  selector: 'app-tast-dialog',
  templateUrl: './tast-dialog.component.html',
  styleUrls: ['./tast-dialog.component.scss']
})
export class TastDialogComponent implements OnInit {
  private backupTask: Partial<Task> = {...this.data.task};

  constructor(
      public dialogRef: MatDialogRef<TastDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: TaskDialogData
  ) { }

  cancel(): void {
    this.data.task.title = this.backupTask.title;
    this.data.task.description = this.backupTask.description;
    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {
  }

}
