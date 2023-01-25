import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceTransactionSourceRef } from "./codatdatacontractsdatasetscommercetransactionsourceref";
import { CodatDataContractsDatasetsCommercePlatformTransactionTypeEnum } from "./codatdatacontractsdatasetscommerceplatformtransactiontypeenum";



export class CodatDataContractsDatasetsCommerceTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subType" })
  subType?: string;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=transactionSourceRef" })
  transactionSourceRef?: CodatDataContractsDatasetsCommerceTransactionSourceRef;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CodatDataContractsDatasetsCommercePlatformTransactionTypeEnum;
}
