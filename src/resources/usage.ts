// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Usage extends APIResource {
  /**
   * Retrieve usage statistics for the authenticated API key
   */
  retrieve(
    query: UsageRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UsageRetrieveResponse> {
    return this._client.get('/v1/usage', { query, ...options });
  }
}

export interface UsageRetrieveResponse {
  /**
   * Reporting period applied to the usage snapshot.
   */
  period: 'current_month' | 'last_30_days' | 'last_7_days';

  usage: UsageRetrieveResponse.Usage;

  breakdown_by_day?: Array<UsageRetrieveResponse.BreakdownByDay>;

  breakdown_by_vertical?: { [key: string]: number };

  end_date?: string;

  start_date?: string;

  tier?: UsageRetrieveResponse.Tier;
}

export namespace UsageRetrieveResponse {
  export interface Usage {
    percentage_used: number;

    requests_limit: number;

    requests_made: number;

    requests_remaining: number;

    reset_date: string;
  }

  export interface BreakdownByDay {
    date: string;

    requests: number;
  }

  export interface Tier {
    /**
     * Tier name such as Free, Basic, Pro, or Enterprise.
     */
    name?: string;

    /**
     * Human-readable rate limit summary (e.g., `50 requests/minute`).
     */
    rate_limit?: string;
  }
}

export interface UsageRetrieveParams {
  /**
   * Breakdown granularity for usage data.
   */
  breakdown?: 'daily' | 'vertical' | 'both';

  /**
   * Reporting period to use when calculating usage.
   */
  period?: 'current_month' | 'last_30_days' | 'last_7_days';
}

export declare namespace Usage {
  export {
    type UsageRetrieveResponse as UsageRetrieveResponse,
    type UsageRetrieveParams as UsageRetrieveParams,
  };
}
