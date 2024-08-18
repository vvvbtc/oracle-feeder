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
      interval: 6 * 1000,
      symbols: [
        'BTC/USDT',
        'ETH/USDT',
        'BNB/USDT',
      ],
    },
    curve: {
      interval: 6 * 1000,
      symbols: [
        'BTC/USDT:0x071c661B4DeefB59E2a3DdB20Db036821eeE8F4b',
        'ETH/USDT:0x071c661B4DeefB59E2a3DdB20Db036821eeE8F4b',
        'BNB/USDT:0x071c661B4DeefB59E2a3DdB20Db036821eeE8F4b',
      ],
    }
  }
}
