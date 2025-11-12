// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Tasteray from 'tasteray';

const client = new Tasteray({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource recommend', () => {
  // Prism tests are disabled
  test.skip('generate: only required params', async () => {
    const responsePromise = client.recommend.generate({
      context: {
        preferences: [
          'deep story-driven RPGs',
          'character customization',
          'open world exploration',
          'meaningful choices',
        ],
      },
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
    const response = await client.recommend.generate({
      context: {
        preferences: [
          'deep story-driven RPGs',
          'character customization',
          'open world exploration',
          'meaningful choices',
        ],
        constraints: { platforms: 'bar', max_price: 'bar', playtime_hours: 'bar' },
        history: [{ item: 'item', rating: 'rating', metadata: { foo: 'bar' } }],
      },
      vertical: 'video_games',
      items: [{ id: 'id', name: 'name', description: 'description', metadata: { foo: 'bar' } }],
      options: { count: 4, explanation_depth: 'detailed', include_alternatives: true, streaming: true },
    });
  });
});
