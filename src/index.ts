import { RPCMethods } from "./RPCMethods"
import wallets from "./database/wallets.json"

async function main() {
  for (const wallet of wallets) {
    const response = await RPCMethods.verifyUnclaimedGas(wallet.Address)

    console.log(`Candidato ${wallet.Candidate} (${wallet.Address}) tem ${response.result.unclaimed} GAS disponível para resgate.`)
  }
}

main().then(() => console.log("Fim do programa.")).catch(console.error)