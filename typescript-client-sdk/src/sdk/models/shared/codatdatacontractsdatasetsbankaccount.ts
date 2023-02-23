import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankAccountTypeEnum } from "./codatdatacontractsdatasetsbankaccounttypeenum";
import { CodatDataContractsDatasetsMetadata } from "./codatdatacontractsdatasetsmetadata";


export class CodatDataContractsDatasetsBankAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType?: CodatDataContractsDatasetsBankAccountTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=availableBalance" })
  availableBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=iBan" })
  iBan?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=institution" })
  institution?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: CodatDataContractsDatasetsMetadata;

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
}