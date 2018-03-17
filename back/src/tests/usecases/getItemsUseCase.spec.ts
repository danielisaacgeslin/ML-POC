import { expect } from 'chai';

import { GetItemsUseCase } from '../../usecases';
import { ItemModel, ItemsResponse } from '../../models';
import { MockItemsRepository } from '../mocks/mockItemsRepository'

// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';
describe('GetItemsUseCase', () => {
  let useCase: GetItemsUseCase;
  beforeEach(() => {
    useCase = new GetItemsUseCase(new MockItemsRepository() as any);
  });

  it('should find many', async () => {
    const results = await useCase.find('');
    expect(results.length).to.be.greaterThan(0);
  });

  it('should get by id', async () => {
    const results = await useCase.getById('')
    expect(!!results).to.equal(true);
  });
});
