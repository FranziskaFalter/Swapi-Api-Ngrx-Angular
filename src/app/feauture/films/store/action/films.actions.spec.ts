import * as FilmsActions from './films.actions';

describe('Films', () => {
  it('should create an instance', () => {
    expect(new FilmsActions.LoadFilmss()).toBeTruthy();
  });
});
