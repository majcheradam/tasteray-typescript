// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Tasteray from 'tasteray';

const client = new Tasteray({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource explain', () => {
  // Prism tests are disabled
  test.skip('generate: only required params', async () => {
    const responsePromise = client.explain.generate({
      context: {
        user_preferences: ['deep story-driven RPGs', 'character customization', 'meaningful choices'],
      },
      item: { name: "Baldur's Gate 3", type: 'game' },
      vertical: 'video_games',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('generate: required and optional params', async () => {
    const response = await client.explain.generate({
      context: {
        user_preferences: ['deep story-driven RPGs', 'character customization', 'meaningful choices'],
        constraints: { platforms: 'bar' },
      },
      item: {
        name: "Baldur's Gate 3",
        type: 'game',
        metadata: { developer: 'bar', year: 'bar', platform: 'bar' },
      },
      vertical: 'video_games',
      options: { depth: 'detailed', include_alternatives: true },
    });
  });
});
