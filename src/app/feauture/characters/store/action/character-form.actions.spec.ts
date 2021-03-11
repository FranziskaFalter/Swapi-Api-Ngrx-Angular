import * as fromCharacterForm from './character-form.actions';

describe('loadCharacterForms', () => {
  it('should return an action', () => {
    expect(fromCharacterForm.loadCharacterForms().type).toBe('[CharacterForm] Load CharacterForms');
  });
});
