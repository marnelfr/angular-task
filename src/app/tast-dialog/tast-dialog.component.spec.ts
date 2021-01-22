import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastDialogComponent } from './tast-dialog.component';

describe('TastDialogComponent', () => {
  let component: TastDialogComponent;
  let fixture: ComponentFixture<TastDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TastDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TastDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
