import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistTokenComponent } from './artist-token.component';

describe('ArtistTokenComponent', () => {
  let component: ArtistTokenComponent;
  let fixture: ComponentFixture<ArtistTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
