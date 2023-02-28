import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankingBankingTransactionCodeEnum } from "./codatdatacontractsdatasetsbankingbankingtransactioncodeenum";
import { CodatDataContractsDatasetsBankingTransactionCategoryRef } from "./codatdatacontractsdatasetsbankingtransactioncategoryref";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsBankingTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "authorizedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  authorizedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: CodatDataContractsDatasetsBankingBankingTransactionCodeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "merchantName" })
  merchantName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "postedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  postedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "transactionCategoryRef" })
  @Type(() => CodatDataContractsDatasetsBankingTransactionCategoryRef)
  transactionCategoryRef?: CodatDataContractsDatasetsBankingTransactionCategoryRef;
}