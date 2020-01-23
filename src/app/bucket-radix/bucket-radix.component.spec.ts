import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketRadixComponent } from './bucket-radix.component';

describe('BucketRadixComponent', () => {
  let component: BucketRadixComponent;
  let fixture: ComponentFixture<BucketRadixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketRadixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketRadixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
