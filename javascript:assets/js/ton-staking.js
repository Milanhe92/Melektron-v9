import { TonClient, WalletContractV4 } from "@ton/ton";
import { mnemonicToWalletKey } from "@ton/crypto";

const client = new TonClient({ endpoint: 'https://ton-mainnet.io' });

export async function stakeTON(amount, duration) {
  try {
    LDObserve.startSpan('ton-staking-operation', { amount, duration });
    
    // 1. Dobijanje ključeva iz mnemonika (korisnikov wallet)
    const mnemonic = 'vaš-mnemonik-ovde'; // U praksi dobija se iz sigurnog izvora
    const key = await mnemonicToWalletKey(mnemonic.split(' '));
    
    // 2. Povezivanje sa walletom
    const wallet = WalletContractV4.create({ workchain: 0, publicKey: key.publicKey });
    const contract = client.open(wallet);
    
    // 3. Adresa staking ugovora (VAŠA ADRESA)
    const stakingContract = 'EQCDSWH9N691SfTsu7IoLfP3PRipFofpJbX9Z8V8Qj_5sSmF';
    
    // 4. Slanje transakcije
    const seqno = await contract.getSeqno();
    await contract.sendTransfer({
      seqno,
      secretKey: key.secretKey,
      messages: [{
        address: stakingContract,
        amount: amount * 1000000000, // nanoTONs
        payload: 'stake:' + duration // custom poruka za staking
      }]
    });
    
    return { success: true, message: "TON uspešno zaključan!" };
  } catch (error) {
    LDObserve.recordError(error, 'TON Staking Error');
    throw new Error("Greška pri zaključavanju: " + error.message);
  }
}