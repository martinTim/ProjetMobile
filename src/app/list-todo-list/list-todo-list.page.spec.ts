import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListTodoListPage } from './list-todo-list.page';

describe('ListTodoListPage', () => {
  let component: ListTodoListPage;
  let fixture: ComponentFixture<ListTodoListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTodoListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListTodoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
