import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeWriiterComponent } from './type-wriiter.component';

describe('TypeWriiterComponent', () => {
  let component: TypeWriiterComponent;
  let fixture: ComponentFixture<TypeWriiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeWriiterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeWriiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
