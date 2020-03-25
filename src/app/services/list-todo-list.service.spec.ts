import { TestBed } from '@angular/core/testing';

import { ListTodoListService } from './list-todo-list.service';

describe('ListTodoListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListTodoListService = TestBed.get(ListTodoListService);
    expect(service).toBeTruthy();
  });
});
