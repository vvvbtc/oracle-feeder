import fetch from '../../../lib/fetch'
import { errorHandler } from '../../../lib/error'
import * as logger from '../../../lib/logger'
import { Quoter } from '../../base'
import * as _ from 'lodash'
import { num } from '../../../lib/num'

type Response = { price: string }

export class Curve extends Quoter {
  private async updatePrices(): Promise<void> {
    const sysmols = this.symbols.map((symbol) => '"' + sysmols.split(':')[0].replace('/', '') + '"')
    const addresses = this.symbols.map((symbol) => '"' + sysmols.split(':')[1] + '"')
    // for each address, get the price of the symbol
    for (var i = 0; i < addresses.length; i++) {
      const response: Response = await fetch(`https://mainnet.infura.io/v3/03e25f04dee44b84b3151247f97d8c2c=${addresses[i]}`, {
        timeout: this.options.timeout,
      }).then((res) => res.json())

      if (num(response.price).lte(0)) {
        logger.error(`${this.constructor.name}:`, response)
        throw new Error('Invalid response from Curve')
      }
      this.setPrice(sysmols[i],num(response.price))
    }
  }

  protected async update(): Promise<boolean> {
    await this.updatePrices().catch(errorHandler)

    return true
  }
}

export default Curve
