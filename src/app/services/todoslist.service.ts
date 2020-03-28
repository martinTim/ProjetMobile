import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoslistService {

  private todoCollection: AngularFirestoreCollection<Todo>;

  private todo: Observable<Array<Todo>>;

  constructor(private db: AngularFirestore) {
    this.todoCollection = db.collection<Todo>('todo');

    this.todo = this.todoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  get(id: String): Array<Todo> {
    var tmp = new Array<Todo>();
    this.todo.forEach(todoList => todoList.forEach(todo =>{
      if(todo.idListe ===  id){
        tmp.push(todo);
      }
    }));

    return tmp;
  }

  add(todo: Todo) {
    return this.todoCollection.add(todo);
  }

  delete(todo: Todo){
    return this.todoCollection.doc(todo.id).delete();
  }

}
