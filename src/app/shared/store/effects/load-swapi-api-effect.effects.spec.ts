import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable} from 'rxjs';

import {LoadSwapiApiEffectEffects} from './load-swapi-api-effect.effects';

describe('LoadSwapiApiEffectEffects', () => {
  let actions$: Observable<any>;
  let effects: LoadSwapiApiEffectEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoadSwapiApiEffectEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(LoadSwapiApiEffectEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
