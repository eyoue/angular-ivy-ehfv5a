import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CryptoProComponent } from "./crypto-pro/crypto-pro.component";

@NgModule({
  imports: [CommonModule],
  declarations: [CryptoProComponent],
  exports: [CryptoProComponent]
})
export class CryptoProModule {}
