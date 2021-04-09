import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarBotComponent } from './toolbar-bot.component';

describe('ToolbarBotComponent', () => {
  let component: ToolbarBotComponent;
  let fixture: ComponentFixture<ToolbarBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarBotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
