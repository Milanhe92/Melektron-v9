// TON Donation Functionality
async function donateTON(amount, walletType = 'telegram') {
  const tonAddresses = {
    'telegram': 'UQCDSWH9N691SfTsu7IoLfP3PRipFofpJbX9Z8V8Qj-5sSmF',
    'gateway': 'UQDeo4mU9UneETjpPR6pzNg-NigHKbLhOyQYukTactm3w-vt'
  };

  try {
    // For production: Integrate with TON Connect SDK
    LDObserve.startSpan('ton-donation', { walletType, amount });

    // Simulate transaction (replace with actual TON SDK)
    const txData = {
      from: 'user-wallet',
      to: tonAddresses[walletType],
      amount: amount * 1000000000, // nanoTONs
      timestamp: Date.now()
    };

    // Record to backend
    await fetch('/api/donations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...txData,
        currency: 'TON',
        network: 'TON'
      })
    });

    return { success: true, message: "TON transakcija uspešna!" };
  } catch (error) {
    LDObserve.recordError(error, 'TON Donation Error', { walletType });
    throw new Error("Došlo je do greške: " + error.message);
  }
}

// Multi-Chain Web3 Donations
async function donateCrypto(amount, currency, chain = 'ethereum') {
  const chainAddresses = {
    'ethereum': '0x25F6cce406a05E2a9013c51Fc01E14b39a46f6C7',
    'bnb': '0x25F6cce406a05E2a9013c51Fc01E14b39a46f6C7',
    'ton': 'UQCDSWH9N691SfTsu7IoLfP3PRipFofpJbX9Z8V8Qj-5sSmF',
    'btc': 'bc1q9nnryk45w5aauc4g08pjun4hy9vdxecxsywwlw'
  };

  try {
    LDObserve.startSpan('crypto-donation', { currency, chain, amount });

    if (window.ethereum && chain !== 'ton' && chain !== 'btc') {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const accounts = await web3.eth.getAccounts();

      const txReceipt = await web3.eth.sendTransaction({
        from: accounts[0],
        to: chainAddresses[chain],
        value: web3.utils.toWei(amount.toString(), 'ether')
      });

      return { 
        success: true, 
        hash: txReceipt.transactionHash,
        message: `${currency} transakcija potvrđena!`
      };
    } else {
      return { 
        success: true, 
        message: `Skenirajte QR kod za ${currency} donaciju`,
        address: chainAddresses[chain]
      };
    }
  } catch (error) {
    LDObserve.recordError(error, 'Crypto Donation Error', { currency, chain });
    throw new Error("Transakcija neuspešna: " + error.message);
  }
}