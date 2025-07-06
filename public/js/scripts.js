// JavaScript fajlovi će biti dodati kasnije
// assets/js/simulator.js
const controls = {
  speed: 1.0,
  particleCount: 10000,
  blackHoleSize: 15
};

function updateSimulation() {
  // Implementirajte promene u realnom vremenu
}
const onClick = () => {
  const start = Date.now();
  doInterestingWork();
  const elapsed = Date.now() - start;
  LDObserve.recordGauge({name: "elapsedTimeMs", value: elapsed});
};
// This span ends automatically after the callback completes
LDObserve.startSpan('fetchData', (span) => {
  // Your code here
});

LDObserve.recordLog('Example log message', Severity.DEBUG);
LDObserve.recordError(error, 'optional message', {
  component: 'ExampleComponent.tsx',
});
<meta
  http-equiv="Content-Security-Policy"
  content="connect-src: https://pub.observability.app.launchdarkly.com https://otel.observability.app.launchdarkly.com; worker-src data: blob:;"
/>

const context = {
  kind: 'user',
  key: 'context-key-123abc'
};

const client = initialize('client-side-id-123abc', context, {
  plugins: [
    new Observability({
      tracingOrigins: true, // attribute frontend requests to backend domains
      networkRecording: {
        enabled: true,
        recordHeadersAndBody: true
      }
    })
  ]
});
import { Observability, LDObserve } from "@launchdarkly/observability";

LDObserve.register(client);
import { Observability, LDObserve } from "@launchdarkly/observability";

LDObserve.init();
const context = {
  kind: 'user',
  key: 'context-key-123abc'
};

const client = initialize('client-side-id-123abc', context, {
  plugins: [ new Observability() ]
});
import { initialize } from "launchdarkly-js-client-sdk";
import { Observability, LDObserve } from "@launchdarkly/observability";
npm install launchdarkly-js-client-sdk
npm install @launchdarkly/observabilitynpm install launchdarkly-js-client-sdk
npm install @launchdarkly/observability
// Vanta.js background initialization
function initVanta() {
    if (typeof VANTA !== 'undefined') {
        VANTA.NET({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x8a2be2,
            backgroundColor: 0x0a0a18,
            points: 15.00,
            maxDistance: 24.00,
            spacing: 17.00
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initVanta();

    // Add other common JavaScript functionality here
    // (particles, animations, etc.)
});
// KOPIRANJE U KLIPBOARD
function copyToClipboard(elementId) {
    const el = document.getElementById(elementId);
    const text = el.innerText;

    navigator.clipboard.writeText(text).then(() => {
        const btn = el.nextElementSibling;
        const originalText = btn.innerText;
        btn.innerText = "✓ Kopirano!";

        // Kvantni efekat za potvrdu
        const quantumEffect = document.getElementById('quantumEffect');
        quantumEffect.style.display = 'block';

        setTimeout(() => {
            btn.innerText = originalText;
            quantumEffect.style.display = 'none';
        }, 3000);
    });
}

// LINKOVI ZA DIREKTNU DONACIJU
document.querySelectorAll('.donation-item a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const quantumEffect = document.getElementById('quantumEffect');
        quantumEffect.style.display = 'block';

        // Otvaranje linka nakon animacije
        setTimeout(() => {
            window.open(this.href, '_blank');
            quantumEffect.style.display = 'none';
        }, 1500);
    });
});
document.querySelector('.portal-button[href="index.html"]').addEventListener('click', function(e) {
    e.preventDefault();

    // Animacija prelaska do donacione sekcije
    document.getElementById('donationForm').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    // Dodatni vizuelni efekat
    document.querySelectorAll('.donation-card').forEach((card, i) => {
        setTimeout(() => {
            card.style.transform = 'scale(1.05)';
            setTimeout(() => card.style.transform = '', 500);
        }, i * 200);
    });
});
// DODAJTE U POSTOJEĆI <script> TAG
function copyToClipboard(elementId) {
    const el = document.getElementById(elementId);
    const text = el.innerText;

    navigator.clipboard.writeText(text).then(() => {
        const btn = el.nextElementSibling || el.parentElement.querySelector('.copy-button');
        const originalText = btn.innerText;

        btn.innerText = "✓ Kopirano!";
        btn.style.background = "rgba(0, 255, 157, 0.2)";
        btn.style.borderColor = "var(--revenue-green)";

        // Prikaz kvantnog efekta
        const quantumEffect = document.getElementById('quantumEffect');
        quantumEffect.style.display = 'block';

        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = "rgba(138, 43, 226, 0.2)";
            btn.style.borderColor = "var(--quantum-purple)";
            quantumEffect.style.display = 'none';
        }, 3000);
    });
}

// LINKOVI ZA DIREKTNU DONACIJU
document.querySelectorAll('.donation-item a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const quantumEffect = document.getElementById('quantumEffect');
        quantumEffect.style.display = 'block';

        setTimeout(() => {
            window.open(this.href, '_blank');
            quantumEffect.style.display = 'none';
        }, 1500);
    });
});