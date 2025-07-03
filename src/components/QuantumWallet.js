import React, { useState, useEffect } from 'react';
import { connectWallet, getTokenBalance } from '../utils/web3';
import MLTRNToken from '../../contracts/MLTRNToken.json';

const QuantumWallet = () => {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const init = async () => {
      const acc = await connectWallet();
      setAccount(acc);
      
      const networkId = await web3.eth.net.getId();
      const tokenContract = new web3.eth.Contract(
        MLTRNToken.abi,
        MLTRNToken.networks[networkId].address
      );
      
      const bal = await getTokenBalance(tokenContract, acc);
      setBalance(web3.utils.fromWei(bal, 'ether'));
    };

    init();
  }, []);

  return (
    <div className="wallet-card">
      <h3>Kvantni Novčanik</h3>
      <p>Adresa: {account ? `${account.substring(0,6)}...${account.substring(38)}` : 'Nije povezan'}</p>
      <p>Stanje: {balance} MLTRN</p>
      <button onClick={connectWallet}>
        {account ? 'Ažuriraj' : 'Poveži Novčanik'}
      </button>
    </div>
  );
};

export default QuantumWallet;