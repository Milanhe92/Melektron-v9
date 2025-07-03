import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  window.ethereum.request({ method: 'eth_requestAccounts' });
  web3 = new Web3(window.ethereum);
} else {
  const provider = new Web3.providers.HttpProvider(
    'https://sepolia.infura.io/v3/YOUR_INFURA_KEY'
  );
  web3 = new Web3(provider);
}

export const connectWallet = async () => {
  const accounts = await web3.eth.requestAccounts();
  return accounts[0];
};

export const getTokenBalance = async (tokenContract, address) => {
  return await tokenContract.methods.balanceOf(address).call();
};

export default web3;