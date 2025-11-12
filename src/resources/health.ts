// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Health extends APIResource {
  /**
   * Returns the current health state of the API and its upstream dependencies.
   * Authentication is not required.
   */
  retrieve(options?: RequestOptions): APIPromise<HealthRetrieveResponse> {
    return this._client.get('/v1/health', options);
  }
}

export interface HealthRetrieveResponse {
  status: 'healthy' | 'unhealthy';

  timestamp: string;

  /**
   * Semantic version of the service.
   */
  version: string;

  /**
   * Component-level health indicators (e.g., `openai`, `langfuse`, `kv_store`).
   */
  checks?: { [key: string]: string };
}

export declare namespace Health {
  export { type HealthRetrieveResponse as HealthRetrieveResponse };
}
