import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './client.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {MidgardStoreModule} from '@libs/midgard-angular/src/lib/modules/store/store.module';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MidgardStoreModule.forRoot()],
      declarations: [ ContactsComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
