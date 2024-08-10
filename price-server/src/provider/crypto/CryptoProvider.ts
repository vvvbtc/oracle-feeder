import * as config from 'config'
import { Provider, ProviderOptions } from './../base'
import { Upbit, Binance, Bitfinex, Kraken, Kucoin } from './quoter'

class CryptoProvider extends Provider {
  constructor(options: ProviderOptions) {
    super(options)
    const { fallbackPriority } = options

    // sort by fallback priority
    for (const name of fallbackPriority) {
      const option = config.cryptoProvider[name]
      if (!option) {
        continue
      }

      name === 'upbit' && this.quoters.push(new Upbit(option))
      name === 'binance' && this.quoters.push(new Binance(option))
      name === 'bitfinex' && this.quoters.push(new Bitfinex(option))
      name === 'kraken' && this.quoters.push(new Kraken(option))
      name === 'kucoin' && this.quoters.push(new Kucoin(option))
    }
  }
}

export default CryptoProvider
