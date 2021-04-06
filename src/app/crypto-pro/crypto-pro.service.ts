import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import {
  getUserCertificates,
  isValidSystemSetup,
  getSystemInfo,
  createXMLSignature
} from "crypto-pro";
import { CryptoProPluginInfo } from "./crypto-pro";
import { map } from "rxjs/operators";

@Injectable({
  provideIn: "root"
})
export class CryptoProService {
  constructor() {}

  isPluginValid(): Observable<boolean> {
    return from(isValidSystemSetup());
  }

  getPluginInfo(): Observable<CryptoProPluginInfo> {
    return from(getSystemInfo()).pipe(
      map(info => new CryptoProPluginInfo(info))
    );
  }

  getUserCertificates(): Observable<any> {
    return new Observable(observer =>
      from(getUserCertificates()).subscribe(observer)
    );
  }

  createXMLSignature(
    thumbprint: string,
    unencryptedMessage: string
  ): Observable<any> {
    return new Observable(observer =>
      from(
        this.createXMLSignaturePromise(thumbprint, unencryptedMessage)
      ).subscribe(observer)
    );
  }
  private async createXMLSignaturePromise(
    thumbprint: string,
    unencryptedMessage: string
  ) {
    return await createXMLSignature(thumbprint, unencryptedMessage);
  }
}
