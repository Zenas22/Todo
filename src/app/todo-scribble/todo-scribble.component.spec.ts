import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoScribbleComponent } from './todo-scribble.component';

describe('TodoScribbleComponent', () => {
  let component: TodoScribbleComponent;
  let fixture: ComponentFixture<TodoScribbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoScribbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoScribbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
