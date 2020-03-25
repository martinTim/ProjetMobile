import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { TodoUser } from '../model/todoUser';
import { ListTodo } from '../model/ListTodo';

@Injectable({
  providedIn: 'root'
})
export class ListTodoListService {

  private todoListCollection: AngularFirestoreCollection<ListTodo>;

  private todoList: Observable<Array<ListTodo>>;

  constructor(private db: AngularFirestore) {
    this.todoListCollection = db.collection<ListTodo>('ListTodo');

    this.todoList = this.todoListCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  get(): Observable<Array<ListTodo>> {
    return this.todoList;
  }

  add(todoList: ListTodo) {
    return this.todoListCollection.add(todoList);
  }

  delete(todoList: ListTodo){
    return this.todoListCollection.doc(todoList.id).delete();
  }

}
