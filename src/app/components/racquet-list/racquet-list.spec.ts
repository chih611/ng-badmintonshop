import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacquetList } from './racquet-list';

describe('RacquetList', () => {
  let component: RacquetList;
  let fixture: ComponentFixture<RacquetList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacquetList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RacquetList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
