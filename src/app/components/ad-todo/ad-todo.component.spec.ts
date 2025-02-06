import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTodoComponent } from './ad-todo.component';

describe('AdTodoComponent', () => {
  let component: AdTodoComponent;
  let fixture: ComponentFixture<AdTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
