import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphListComponent } from './paragraph-list.component';

describe('ParagraphListComponent', () => {
  let component: ParagraphListComponent;
  let fixture: ComponentFixture<ParagraphListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
