export class CryptoProPluginInfo {
  pluginVersion: string;
  cspVersion: string;

  constructor({ cadesVersion, cspVersion }) {
    this.pluginVersion = cadesVersion;
    this.cspVersion = cspVersion;
  }
}

export interface CertificateModel {
  issuerName: string;
  isValid: boolean;
  name: string;
  thumbprint: string;
  validFrom: string;
  validTo: string;
  class?: string;
}
