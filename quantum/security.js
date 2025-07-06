   export class QuantumSeal {
  constructor() {
    this.entropySource = 'https://quantum-random.herokuapp.com/';
  }

  async encrypt(data) {
    const key = await this.generateQuantumKey();
    return btoa(JSON.stringify({ data, key }));
  }

  async generateQuantumKey() {
    const response = await fetch(`${this.entropySource}/get`);
    const entropy = await response.json();
    return entropy.random;
  }
}