import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PostDialogComponent } from './post-dialog.component';

describe('PostDialogComponent', () => {
  let component: PostDialogComponent;
  let fixture: ComponentFixture<PostDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
