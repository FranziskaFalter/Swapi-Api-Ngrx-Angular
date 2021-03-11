import * as fromPlanetForm from './planet-form.actions';

describe('loadPlanetForms', () => {
  it('should return an action', () => {
    expect(fromPlanetForm.loadPlanetForms().type).toBe('[PlanetForm] Load PlanetForms');
  });
});
