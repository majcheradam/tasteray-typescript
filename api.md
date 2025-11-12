# Recommend

Types:

- <code><a href="./src/resources/recommend.ts">RecommendationResult</a></code>
- <code><a href="./src/resources/recommend.ts">ResponseMeta</a></code>
- <code><a href="./src/resources/recommend.ts">RecommendGenerateResponse</a></code>

Methods:

- <code title="post /v1/recommend">client.recommend.<a href="./src/resources/recommend.ts">generate</a>({ ...params }) -> RecommendGenerateResponse</code>

# Explain

Types:

- <code><a href="./src/resources/explain.ts">ExplainGenerateResponse</a></code>

Methods:

- <code title="post /v1/explain">client.explain.<a href="./src/resources/explain.ts">generate</a>({ ...params }) -> ExplainGenerateResponse</code>

# Usage

Types:

- <code><a href="./src/resources/usage.ts">UsageRetrieveResponse</a></code>

Methods:

- <code title="get /v1/usage">client.usage.<a href="./src/resources/usage.ts">retrieve</a>({ ...params }) -> UsageRetrieveResponse</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthRetrieveResponse</a></code>

Methods:

- <code title="get /v1/health">client.health.<a href="./src/resources/health.ts">retrieve</a>() -> HealthRetrieveResponse</code>
