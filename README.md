# angular-task
Let's try to build Google task using angular

**@Input()** and **@Output()** give a child component a way to communicate with its parent component. 
> **@Input()** allows a parent component to update data in the child component. 

Conversely, 
> **@Output()** allows the child to send data to a parent component.

**E.g.:**\
**@Input() item: string;** // The value for item ?can come from the parent component.\
That value is sent using the **property binding** as below
> <app-item-detail [item]="currentItem"></app-item-detail>

**currentItem** is here must be defined in the the parent component.\

We can here watch changes on **item** since it"s an *input* property.\
We can have something like:\
> **ngOnChanges**(item: string) { //code... }

To integrate firebase in an angular project, we use the command\
> ng add **@angular/fire**

While the installation is pursing, just let the Firebase to collecte CLI usage and error reporti information.\

Edit **firebase** permissions
> https://firebase.google.com/docs/firestore/security/get-started

Learning firebase best pratices
> https://firebase.google.com/docs/firestore/best-practices






