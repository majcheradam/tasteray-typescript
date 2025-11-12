// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Tasteray } from '../client';

export abstract class APIResource {
  protected _client: Tasteray;

  constructor(client: Tasteray) {
    this._client = client;
  }
}
