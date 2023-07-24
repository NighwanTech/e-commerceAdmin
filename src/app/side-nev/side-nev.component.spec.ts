import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNevComponent } from './side-nev.component';

describe('SideNevComponent', () => {
  let component: SideNevComponent;
  let fixture: ComponentFixture<SideNevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideNevComponent]
    });
    fixture = TestBed.createComponent(SideNevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
