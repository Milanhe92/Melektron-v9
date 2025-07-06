class QuantumEngine {
  constructor() {
    this.entanglementLevel = 0;
    this.quantumState = "superposition";
  }

  init(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.setupQuantumField();
  }

  setupQuantumField() {
    // Inicijalizacija kvantnog polja
    this.particles = [];
    for (let i = 0; i < 10000; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        size: Math.random() * 3 + 1
      });
    }
    
    this.animate();
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    
    this.ctx.fillStyle = 'rgba(10, 10, 24, 0.05)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      
      if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;
      
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.fill();
    });
  }

  entangleTransaction(data) {
    // Kvantno šifrovanje transakcije
    const quantumSignature = this.generateQuantumSignature(data);
    return {
      ...data,
      quantumHash: quantumSignature,
      timestamp: Date.now(),
      entropy: Math.random() * 0.999
    };
  }

  generateQuantumSignature(data) {
    // Pojednostavljena kvantna šifra
    const str = JSON.stringify(data);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return `0x${(hash >>> 0).toString(16).padStart(64, '0')}`;
  }
}

// Globalni kvantni motor
window.QuantumEngine = new QuantumEngine();