   export class QuantumSeal {
  constructor() {
    this.entropySource = 'https://quantum-random.herokuapp.com/';
  }

  async encrypt(data) {
    const key = await this.generateQuantumKey();
    return btoa(JSON.stringify({ data, key }));
  }

  async generateQuantumKey() {
    console.log("NAPOMENA: Koristi se lokalni, a ne kvantni generator.");
    // Vraćamo običan nasumični broj umesto da zovemo ugašeni servis.
    return Math.random().toString(36).substring(2);
}