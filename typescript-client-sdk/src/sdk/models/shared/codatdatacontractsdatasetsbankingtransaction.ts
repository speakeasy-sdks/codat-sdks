import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankingBankingTransactionCodeEnum } from "./codatdatacontractsdatasetsbankingbankingtransactioncodeenum";
import { CodatDataContractsDatasetsBankingTransactionCategoryRef } from "./codatdatacontractsdatasetsbankingtransactioncategoryref";


export class CodatDataContractsDatasetsBankingTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=authorizedDate" })
  authorizedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: CodatDataContractsDatasetsBankingBankingTransactionCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=merchantName" })
  merchantName?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=postedDate" })
  postedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=transactionCategoryRef" })
  transactionCategoryRef?: CodatDataContractsDatasetsBankingTransactionCategoryRef;
}