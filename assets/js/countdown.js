// Web3 Countdown Timer
function startCountdown() {
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 14);
  
  const countdownElement = document.getElementById('web3-countdown');
  
  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = launchDate - now;
    
    if (distance < 0) {
      clearInterval(countdown);
      countdownElement.innerHTML = "Web3 Experience je sada dostupan!";
      return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    countdownElement.innerHTML = `
      <span>${days}</span>dana : 
      <span>${hours}</span>sati : 
      <span>${minutes}</span>minuta
    `;
  }, 1000);
}

// Notify Me Function
function notifyWeb3() {
  const email = prompt("Unesite vaš email za obaveštenje:");
  if (email) {
    // Simulate API call
    setTimeout(() => {
      alert("Uspešno ste prijavljeni! Prvi ćete saznati kada lansiramo Web3 funkcionalnosti.");
      
      // Track with LaunchDarkly
      LDObserve.recordLog('Web3 Notification Signup', {
        email: email,
        timestamp: new Date().toISOString()
      });
    }, 1000);
  }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  startCountdown();
});