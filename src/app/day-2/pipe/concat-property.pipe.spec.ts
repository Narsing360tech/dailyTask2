import { ConcatPropertyPipe } from './concat-property.pipe';

describe('ConcatPropertyPipe', () => {
  it('create an instance', () => {
    const pipe = new ConcatPropertyPipe();
    expect(pipe).toBeTruthy();
  });
});
