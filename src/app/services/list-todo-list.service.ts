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

  getList(id: string): Array<ListTodo> {
    var tmp = new Array<ListTodo>();
    this.todoList.forEach(todoList => todoList.forEach(todo =>{
      if(todo.id === id){
        tmp.push(todo);
      }
    }));
    return tmp;
  }

  public updateTodoList(user: string, id: string, list: ListTodo) {
    this.db.collection('ListTodo', ref => ref.where('id', '==', id))
    .snapshotChanges().subscribe(docs => docs.forEach(v => v.payload.doc.ref.update(list)));
  }

  public getTodoList(listId: string): Observable<ListTodo> {
    return this.todoListCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        }).find(a => a.id === listId);
      })
    );
  }


  addPermission(id: string, user: string, readOnly: boolean){    
    let tmp = this.getTodoList(id);
    const subscription = tmp.subscribe(val => {
       if(readOnly){
        val.userCanRead.push(user);
       }else{
        val.userCanWrite.push(user);
       }
       subscription.unsubscribe();
       this.updateTodoList(user,id,val);
    });        
  }


  add(todoList: ListTodo) {
    return this.todoListCollection.add(todoList);
  }

  delete(todoList: ListTodo){
    return this.todoListCollection.doc(todoList.id).delete();
  }



}
