import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CodatDataContractsDatasetsBankingAccountIdentifiers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bankCode" })
  bankCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "bic" })
  bic?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "iban" })
  iban?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "maskedAccountNumber" })
  maskedAccountNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "subtype" })
  subtype?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}