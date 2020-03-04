import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoUser } from '../model/todoUser';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoslistService {

  private todoUserCollection: AngularFirestoreCollection<TodoUser>;

  private todoUser: Observable<Array<TodoUser>>;

  constructor(private db: AngularFirestore) {
    this.todoUserCollection = db.collection<TodoUser>('todoUser');

    this.todoUser = this.todoUserCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  /*constructor(private db: AngularFirestore, private authGuard: AuthGuardService) {
    if (!this.dservice.isInDisconnectedMode) {
      this.todosCollection = db.collection<TodoList>(authGuard.userDetails().email);
      this.todosCollection$ = this.todosCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
      this.todosCollection$.subscribe(todos => this.todos = todos);
    }
  }*/

  get(): Observable<Array<TodoUser>> {
    return this.todoUser;
  }

  add(todoUser: TodoUser) {
    return this.todoUserCollection.add(todoUser);
  }

  delete(todoUser: TodoUser){
    return this.todoUserCollection.doc(todoUser.id).delete();
  }

}
