import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewMemberComponent } from './crew-member.component';

describe('CrewMemberComponent', () => {
  let component: CrewMemberComponent;
  let fixture: ComponentFixture<CrewMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewMemberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrewMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
