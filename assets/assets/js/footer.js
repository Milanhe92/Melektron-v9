// Dodaje noopener noreferrer automatski svim eksternim linkovima
document.querySelectorAll('.footer a[target="_blank"]').forEach(link => {
    if (!link.getAttribute('rel')) {
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// Dodaje ARIA atribute
const ctaButtons = document.querySelectorAll('.action-buttons a');
ctaButtons[0].setAttribute('aria-label', 'Podrži Melektron projekat');
ctaButtons[1].setAttribute('aria-label', 'Zakažite sastanak sa Milanom');
// Pratite launch događaj
LDObserve.startSpan('public-launch', () => {
  LDObserve.recordLog('Sajt lansiran u javnost', {
    timestamp: new Date().toISOString(),
    version: '1.0-beta'
  });
  
  // Pratite prijave za Web3
  document.querySelector('.cta-button')?.addEventListener('click', notifyWeb3);
});