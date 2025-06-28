// JavaScript fajlovi će biti dodati kasnije
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
