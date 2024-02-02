import axios from "axios"

export class RPCMethods {
  static RPC_URL: string = 'https://mainnet1.neo.coz.io:443'

  static async verifyUnclaimedGas(address: string) {
    try {
      const response = await axios.post(this.RPC_URL, {    
        "jsonrpc": "2.0",
        "method": "getunclaimedgas",
        "params": [address],
        "id": 1
        }
      )

      return response.data
    } catch (error) {
      console.error(error)
    }
  }
}
