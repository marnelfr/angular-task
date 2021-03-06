import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { TaskComponent } from './task/task.component';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { TastDialogComponent } from './tast-dialog/tast-dialog.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

<<<<<<< HEAD
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';

=======
>>>>>>> f2c342c7fb5979df3e8016a779b95409e29cb3b0
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TastDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
<<<<<<< HEAD
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
=======
    FormsModule
>>>>>>> f2c342c7fb5979df3e8016a779b95409e29cb3b0
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
