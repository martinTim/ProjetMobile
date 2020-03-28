import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartageListePage } from './partage-liste.page';

describe('PartageListePage', () => {
  let component: PartageListePage;
  let fixture: ComponentFixture<PartageListePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartageListePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartageListePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
