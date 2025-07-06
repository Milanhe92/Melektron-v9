const TON_SECURE_CONTRACTS = [
  'EQCDSWH9N691SfTsu7IoLfP3PRipFofpJbX9Z8V8Qj_5sSmF',
  'UQDeo4mU9UneETjpPR6pzNg-NigHKbLhOyQYukTactm3w-vt'
];

export function isSecureContract(address) {
  return TON_SECURE_CONTRACTS.includes(address);
}