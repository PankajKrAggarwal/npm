import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CONTACTSComponent } from './contacts.component';

describe('CONTACTSComponent', () => {
  let component: CONTACTSComponent;
  let fixture: ComponentFixture<CONTACTSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CONTACTSComponent]
    });
    fixture = TestBed.createComponent(CONTACTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
