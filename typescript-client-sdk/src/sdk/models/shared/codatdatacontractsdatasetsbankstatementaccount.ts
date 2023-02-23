import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatDataContractsDatasetsBankStatementAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=availableBalance" })
  availableBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=fromDate" })
  fromDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=iban" })
  iban?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=institution" })
  institution?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=nominalCode" })
  nominalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=overdraftLimit" })
  overdraftLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=sortCode" })
  sortCode?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=toDate" })
  toDate?: Date;
}