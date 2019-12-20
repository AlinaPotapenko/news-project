import { LengthLimitPipe } from './length-limit.pipe';

describe('LengthLimitPipe', () => {
  it('create an instance', () => {
    const pipe = new LengthLimitPipe();
    expect(pipe).toBeTruthy();
  });
});
