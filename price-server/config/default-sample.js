module.exports = {
  port: 8532,
  metricsPort: 8533,
  sentry: '', // sentry dsn (https://sentry.io/ - error reporting service)
  reporter: true,
  slack: {
    // for incident alarm (e.g. exchange shutdown)
    channel: '#bot-test',
    url: '',
  },
  cryptoProvider: {
    adjustTvwap: { symbols: [] },
    fallbackPriority: ['binance', 'kraken', 'bitfinex', 'kucoin'],
    binance: {
      interval: 6 * 1000,
      symbols: [
        'BTC/USDT',
        'ETH/USDT',
        'BNB/USDT',
      ],
    },
    kraken: {
      interval: 6 * 1000,
      symbols: [
        'BTC/USDT',
        'ETH/USDT',
        'BNB/USDT',
      ],
    },
    kucoin: {
      interval: 6 * 1000,
      symbols: [
        'BTC/USDT',
        'ETH/USDT',
        'BNB/USDT',
      ],
    },
    bitfinex: {
      symbols: [
        'BTC/USDT',
        'ETH/USDT',
        'BNB/USDT',
      ],
    },
  }
}
