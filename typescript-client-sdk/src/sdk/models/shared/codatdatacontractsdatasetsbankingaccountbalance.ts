import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankingAccountBalanceAmounts } from "./codatdatacontractsdatasetsbankingaccountbalanceamounts";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsBankingAccountBalance extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  @Type(() => CodatDataContractsDatasetsBankingAccountBalanceAmounts)
  balance: CodatDataContractsDatasetsBankingAccountBalanceAmounts;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;
}