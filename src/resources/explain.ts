// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RecommendAPI from './recommend';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Explain extends APIResource {
  /**
   * Generates a structured explanation including summaries, detailed reasoning,
   * potential concerns, and optional alternatives for the supplied item.
   *
   * @example
   * ```ts
   * const response = await client.explain.generate({
   *   context: {
   *     user_preferences: [
   *       'deep story-driven RPGs',
   *       'character customization',
   *       'meaningful choices',
   *     ],
   *     constraints: { platforms: ['PC (Steam)'] },
   *   },
   *   item: {
   *     name: "Baldur's Gate 3",
   *     type: 'game',
   *     metadata: {
   *       developer: 'Larian Studios',
   *       year: 2023,
   *       platform: 'PC',
   *     },
   *   },
   *   vertical: 'video_games',
   *   options: { depth: 'detailed' },
   * });
   * ```
   */
  generate(body: ExplainGenerateParams, options?: RequestOptions): APIPromise<ExplainGenerateResponse> {
    return this._client.post('/v1/explain', { body, ...options });
  }
}

export interface ExplainGenerateResponse {
  confidence: number;

  explanation: ExplainGenerateResponse.Explanation;

  meta: RecommendAPI.ResponseMeta;
}

export namespace ExplainGenerateResponse {
  export interface Explanation {
    detailed_reasoning: Explanation.DetailedReasoning;

    /**
     * Brief overview explaining the overall fit.
     */
    summary: string;

    /**
     * Optional alternative recommendations.
     */
    alternatives?: Array<RecommendAPI.RecommendationResult>;

    potential_concerns?: Array<string>;
  }

  export namespace Explanation {
    export interface DetailedReasoning {
      constraint_satisfaction?: Array<string>;

      taste_alignment?: Array<string>;

      unique_factors?: Array<string>;
    }
  }
}

export interface ExplainGenerateParams {
  context: ExplainGenerateParams.Context;

  item: ExplainGenerateParams.Item;

  /**
   * Vertical in which the item resides.
   */
  vertical: string;

  options?: ExplainGenerateParams.Options;
}

export namespace ExplainGenerateParams {
  export interface Context {
    /**
     * List of user preferences that should be satisfied.
     */
    user_preferences: Array<string>;

    /**
     * Optional constraints such as platforms, budget, or dietary needs.
     */
    constraints?: { [key: string]: unknown };
  }

  export interface Item {
    name: string;

    type: string;

    metadata?: { [key: string]: unknown };
  }

  export interface Options {
    /**
     * Preferred explanation depth.
     */
    depth?: 'brief' | 'detailed';

    /**
     * Return alternative recommendations when available.
     */
    include_alternatives?: boolean;
  }
}

export declare namespace Explain {
  export {
    type ExplainGenerateResponse as ExplainGenerateResponse,
    type ExplainGenerateParams as ExplainGenerateParams,
  };
}
