import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsManagerComponent } from './tags-manager.component';

describe('TagsManagerComponent', () => {
  let component: TagsManagerComponent;
  let fixture: ComponentFixture<TagsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
