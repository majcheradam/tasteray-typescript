// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Recommend extends APIResource {
  /**
   * Returns structured recommendations for any supported vertical. When
   * `options.streaming` is `true`, the server sends the final JSON payload over
   * `text/event-stream` after processing completes.
   *
   * @example
   * ```ts
   * const response = await client.recommend.generate({
   *   context: {
   *     preferences: [
   *       'deep story-driven RPGs',
   *       'character customization',
   *       'open world exploration',
   *       'meaningful choices',
   *     ],
   *     constraints: {
   *       platforms: ['PC (Steam)', 'PlayStation 5'],
   *       max_price: 60,
   *       playtime_hours: '40-100',
   *     },
   *   },
   *   vertical: 'video_games',
   *   options: {
   *     count: 4,
   *     streaming: true,
   *     explanation_depth: 'detailed',
   *   },
   * });
   * ```
   */
  generate(body: RecommendGenerateParams, options?: RequestOptions): APIPromise<RecommendGenerateResponse> {
    return this._client.post('/v1/recommend', { body, ...options });
  }
}

export interface RecommendationResult {
  /**
   * Confidence score between 0 and 1.
   */
  confidence: number;

  explanation: RecommendationResult.Explanation;

  item: RecommendationResult.Item;

  /**
   * Scoring metadata such as taste match, popularity rank, or recency.
   */
  metadata?: { [key: string]: unknown };
}

export namespace RecommendationResult {
  export interface Explanation {
    /**
     * High-level description of why the item fits the context.
     */
    why_match: string;

    /**
     * Key factors contributing to the recommendation.
     */
    key_factors?: Array<string>;

    /**
     * Potential drawbacks or considerations.
     */
    potential_concerns?: Array<string>;
  }

  export interface Item {
    name: string;

    /**
     * Specific item type such as `movie`, `restaurant`, or `product`.
     */
    type: string;

    vertical: string;

    metadata?: { [key: string]: unknown };
  }
}

export interface ResponseMeta {
  /**
   * Server-generated identifier for support and tracing.
   */
  request_id: string;

  /**
   * ISO-8601 timestamp when the response was created.
   */
  timestamp: string;

  /**
   * Name of the model used to generate the response.
   */
  model?: string;

  /**
   * End-to-end processing duration in milliseconds.
   */
  processing_time_ms?: number;

  /**
   * Version of the Langfuse-managed prompt template.
   */
  prompt_version?: string;

  /**
   * Total number of recommendation results produced.
   */
  total_results?: number;

  [k: string]: unknown;
}

export interface RecommendGenerateResponse {
  meta: ResponseMeta;

  recommendations: Array<RecommendationResult>;
}

export interface RecommendGenerateParams {
  context: RecommendGenerateParams.Context;

  /**
   * Vertical type such as `movies`, `restaurants`, `products`, or any custom domain.
   */
  vertical: string;

  /**
   * Optional curated list of items the model can choose from.
   */
  items?: Array<RecommendGenerateParams.Item>;

  options?: RecommendGenerateParams.Options;
}

export namespace RecommendGenerateParams {
  export interface Context {
    /**
     * User preferences or intents that should steer the recommendation.
     */
    preferences: Array<string>;

    /**
     * Optional vertical-specific constraints, such as price, runtime, or dietary
     * requirements.
     */
    constraints?: { [key: string]: unknown };

    /**
     * Optional record of previously evaluated items with ratings.
     */
    history?: Array<Context.History>;
  }

  export namespace Context {
    export interface History {
      /**
       * Name or identifier for the historical item.
       */
      item: string;

      /**
       * Flexible rating label such as `liked`, `5 stars`, or `8/10`.
       */
      rating: string;

      /**
       * Optional metadata captured for the historical item.
       */
      metadata?: { [key: string]: unknown };
    }
  }

  export interface Item {
    /**
     * Unique identifier for the candidate item.
     */
    id: string;

    /**
     * Human-readable item name.
     */
    name: string;

    /**
     * Optional description or synopsis.
     */
    description?: string;

    /**
     * Arbitrary metadata for the candidate item.
     */
    metadata?: { [key: string]: unknown };
  }

  export interface Options {
    /**
     * Number of recommendations to return.
     */
    count?: number;

    /**
     * Explanation verbosity.
     */
    explanation_depth?: 'brief' | 'detailed';

    /**
     * Include alternative options alongside primary recommendations.
     */
    include_alternatives?: boolean;

    /**
     * Enable event-stream delivery once processing completes.
     */
    streaming?: boolean;
  }
}

export declare namespace Recommend {
  export {
    type RecommendationResult as RecommendationResult,
    type ResponseMeta as ResponseMeta,
    type RecommendGenerateResponse as RecommendGenerateResponse,
    type RecommendGenerateParams as RecommendGenerateParams,
  };
}
