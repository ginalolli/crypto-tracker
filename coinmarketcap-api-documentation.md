
# CoinMarketCap API Documentation

## Overview

The CoinMarketCap API provides access to a wealth of data on cryptocurrencies, including price information, market capitalization, volume, and historical data. This documentation outlines the key features of the CoinMarketCap API and provides guidance on how to use it effectively.

## Base URL

The base URL for all API requests is:

```
https://pro-api.coinmarketcap.com/v1
```

## Authentication

To access the CoinMarketCap API, you must include an API key in your requests. You can obtain an API key by signing up on the [CoinMarketCap API website](https://coinmarketcap.com/api/).

### Authentication Header

Include the following header in all API requests:

```
X-CMC_PRO_API_KEY: YOUR_API_KEY_HERE
```

## Endpoints

### 1. Cryptocurrency Listings

**Endpoint:**

```
GET /cryptocurrency/listings/latest
```

**Description:**

Fetches a list of cryptocurrencies with their latest market data.

**Parameters:**

- `start` (optional): The starting index (1-based) of the list of results.
- `limit` (optional): The number of results to return (maximum 100).
- `convert` (optional): The currency to convert to (e.g., USD, EUR).

**Example Request:**

```http
GET https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10&convert=USD
```

**Response:**

```json
{
    "status": {
        "timestamp": "2024-08-26T12:00:00.000Z",
        "error_code": 0,
        "error_message": "",
        "elapsed": 10,
        "credit_count": 1,
        "total_count": 5000
    },
    "data": [
        {
            "id": 1,
            "name": "Bitcoin",
            "symbol": "BTC",
            "slug": "bitcoin",
            "num_market_pairs": 10000,
            "date_added": "2013-04-28T00:00:00.000Z",
            "tags": ["mineable", "pow", "sha-256"],
            "max_supply": 21000000,
            "circulating_supply": 19000000,
            "total_supply": 19000000,
            "platform": null,
            "cmc_rank": 1,
            "last_updated": "2024-08-26T12:00:00.000Z",
            "quote": {
                "USD": {
                    "price": 30000.00,
                    "volume_24h": 25000000000,
                    "percent_change_1h": -0.5,
                    "percent_change_24h": 1.2,
                    "percent_change_7d": 2.3,
                    "market_cap": 570000000000,
                    "last_updated": "2024-08-26T12:00:00.000Z"
                }
            }
        }
        // More cryptocurrencies here...
    ]
}
```

**Fields:**

- `id`: Unique identifier for the cryptocurrency.
- `name`: The name of the cryptocurrency.
- `symbol`: The symbol of the cryptocurrency (e.g., BTC for Bitcoin).
- `quote.USD.price`: The current price in USD.
- `quote.USD.volume_24h`: The trading volume over the past 24 hours in USD.
- `quote.USD.percent_change_1h`: The percentage change in price over the past hour.
- `quote.USD.percent_change_24h`: The percentage change in price over the past 24 hours.
- `quote.USD.percent_change_7d`: The percentage change in price over the past 7 days.
- `quote.USD.market_cap`: The market capitalization in USD.

### 2. Cryptocurrency Information

**Endpoint:**

```
GET /cryptocurrency/info
```

**Description:**

Fetches detailed information about specific cryptocurrencies.

**Parameters:**

- `id`: The ID or symbol of the cryptocurrency (comma-separated for multiple IDs).

**Example Request:**

```http
GET https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=1,1027
```

**Response:**

```json
{
    "status": {
        "timestamp": "2024-08-26T12:00:00.000Z",
        "error_code": 0,
        "error_message": "",
        "elapsed": 10,
        "credit_count": 1
    },
    "data": {
        "1": {
            "id": 1,
            "name": "Bitcoin",
            "symbol": "BTC",
            "slug": "bitcoin",
            "category": "coin",
            "description": "Bitcoin is a decentralized digital currency...",
            "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
            "subreddit": "bitcoin",
            "notice": null,
            "tags": ["mineable", "pow", "sha-256"]
        },
        "1027": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "category": "coin",
            "description": "Ethereum is a decentralized platform that runs smart contracts...",
            "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
            "subreddit": "ethereum",
            "notice": null,
            "tags": ["smart-contracts", "ethereum"]
        }
    }
}
```

**Fields:**

- `id`: Unique identifier for the cryptocurrency.
- `name`: The name of the cryptocurrency.
- `symbol`: The symbol of the cryptocurrency.
- `description`: A brief description of the cryptocurrency.
- `logo`: URL to the cryptocurrency's logo.
- `subreddit`: The associated subreddit for the cryptocurrency.

### 3. Global Metrics

**Endpoint:**

```
GET /global-metrics/quotes/latest
```

**Description:**

Fetches global market metrics, such as total market capitalization and total 24-hour trading volume.

**Parameters:**

- `convert`: The currency to convert to (e.g., USD).

**Example Request:**

```http
GET https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?convert=USD
```

**Response:**

```json
{
    "status": {
        "timestamp": "2024-08-26T12:00:00.000Z",
        "error_code": 0,
        "error_message": "",
        "elapsed": 10,
        "credit_count": 1
    },
    "data": {
        "total_market_cap": {
            "USD": 1000000000000
        },
        "total_24h_volume": {
            "USD": 50000000000
        },
        "active_cryptocurrencies": 5000,
        "active_market_pairs": 15000,
        "total_exchanges": 400,
        "total_market_cap_yesterday": {
            "USD": 950000000000
        },
        "total_volume_yesterday": {
            "USD": 48000000000
        }
    }
}
```

**Fields:**

- `total_market_cap.USD`: Total market capitalization in USD.
- `total_24h_volume.USD`: Total 24-hour trading volume in USD.
- `active_cryptocurrencies`: Total number of active cryptocurrencies.
- `active_market_pairs`: Total number of active market pairs.
- `total_exchanges`: Total number of exchanges listed.

## Rate Limits

The CoinMarketCap API has rate limits to ensure fair usage. Please refer to the [CoinMarketCap API documentation](https://coinmarketcap.com/api/documentation/v1/) for details on rate limits and how to handle them.

## Error Handling

The API may return error responses in case of issues. Typical error codes include:

- `400`: Bad Request – The request was invalid or cannot be otherwise served.
- `401`: Unauthorized – Invalid API key.
- `403`: Forbidden – The request is understood but has been refused.
- `404`: Not Found – The requested resource could not be found.
- `429`: Too Many Requests – The rate limit has been exceeded.
- `500`: Internal Server Error – An error occurred on the server side.

## Conclusion

This documentation provides a comprehensive guide to using the CoinMarketCap API. For additional details and advanced features, please refer to the [official CoinMarketCap API documentation](https://coinmarketcap.com/api/documentation/v1/).

Feel free to integrate this API into your projects to fetch real-time cryptocurrency data and leverage the wealth of information available.

---

This document provides a structured overview of the CoinMarketCap API, detailing the available endpoints, parameters, responses, and error handling. It's designed to be clear and informative, making it easy for developers to understand and use the API effectively.