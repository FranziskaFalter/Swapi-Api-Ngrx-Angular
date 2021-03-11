import * as fromFilmForm from './film-form.actions';

describe('loadFilmForms', () => {
  it('should return an action', () => {
    expect(fromFilmForm.loadFilmForms().type).toBe('[FilmForm] Load FilmForms');
  });
});
