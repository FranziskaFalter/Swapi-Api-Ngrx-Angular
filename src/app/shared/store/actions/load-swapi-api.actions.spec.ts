import * as fromLoadSwapiApi from './load-swapi-api.actions';

describe('loadLoadSwapiApis', () => {
  it('should return an action', () => {
    expect(fromLoadSwapiApi.loadLoadSwapiApis().type).toBe('[LoadSwapiApi] Load LoadSwapiApis');
  });
});
