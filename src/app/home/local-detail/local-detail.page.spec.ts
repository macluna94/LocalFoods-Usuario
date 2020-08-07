import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocalDetailPage } from './local-detail.page';

describe('LocalDetailPage', () => {
  let component: LocalDetailPage;
  let fixture: ComponentFixture<LocalDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocalDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
