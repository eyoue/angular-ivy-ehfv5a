import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-crypto-pro",
  templateUrl: "./crypto-pro.component.html",
  styleUrls: ["./crypto-pro.component.css"]
})
export class CryptoProComponent implements OnInit {
  constructor(private cryptoProService: CryptoProService) {}

  ngOnInit() {
    this.isValid();
    this.getPluginInfo();
    this.getUserCertificates();
  }

  log = v => console.log(v);

  isValid() {
    this.cryptoProService.isPluginValid().subscribe(this.log);
  }

  getPluginInfo() {
    this.cryptoProService.getPluginInfo().subscribe(this.log);
  }

  getUserCertificates() {
    this.cryptoProService.getUserCertificates().subscribe(this.log);
  }
}
