import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable} from 'rxjs';

import {FilmsEffects} from './films.effects';

describe('FilmsEffects', () => {
  let actions$: Observable<any>;
  let effects: FilmsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FilmsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(FilmsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
