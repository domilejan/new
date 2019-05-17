import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BlueprintClientComponent } from './blueprint-client.component';
import { StoreStub } from '../../../../midgard/testing-utilities/stubs';
import { Store } from '../../../../midgard/modules/store/store';

describe('ClientComponent', () => {
  let component: BlueprintClientComponent;
  let fixture: ComponentFixture<BlueprintClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        { provide: Store, useClass: StoreStub },
      ],
      declarations: [ BlueprintClientComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueprintClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
