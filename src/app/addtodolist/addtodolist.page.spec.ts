import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddtodolistPage } from './addtodolist.page';

describe('AddtodolistPage', () => {
  let component: AddtodolistPage;
  let fixture: ComponentFixture<AddtodolistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtodolistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddtodolistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
