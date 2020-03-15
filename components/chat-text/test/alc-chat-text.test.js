import { fixture, expect, fixtureCleanup } from '@open-wc/testing';
import '../alc-chat-text.js';
import { basic } from '../stories/index.stories.js';

describe('al-chat-text', () => {
  let el;

  afterEach(() => fixtureCleanup());

  beforeEach(async () => {
    el = await fixture(basic());
    return el.updateComplete;
  });

  it('DOM', async () => {
    expect(el).dom.to.equalSnapshot();
  });

  it('Shadow DOM', async () => {
    expect(el).shadowDom.to.equalSnapshot();
  });

  it('Light DOM', async () => {
    expect(el).lightDom.to.equalSnapshot();
  });

  it('passes the a11y audit', async () => {
    await expect(el).shadowDom.to.be.accessible();
  });
});
