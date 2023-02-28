import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankingAccountBalanceAmounts } from "./codatdatacontractsdatasetsbankingaccountbalanceamounts";
import { CodatDataContractsDatasetsBankingAccountIdentifiers } from "./codatdatacontractsdatasetsbankingaccountidentifiers";
import { CodatDataContractsDatasetsBankingAccountInstitution } from "./codatdatacontractsdatasetsbankingaccountinstitution";
import { CodatDataContractsDatasetsBankingAccountTypeEnum } from "./codatdatacontractsdatasetsbankingaccounttypeenum";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsBankingAccount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  @Type(() => CodatDataContractsDatasetsBankingAccountBalanceAmounts)
  balance: CodatDataContractsDatasetsBankingAccountBalanceAmounts;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  @SpeakeasyMetadata()
  @Expose({ name: "holder" })
  holder?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "identifiers" })
  @Type(() => CodatDataContractsDatasetsBankingAccountIdentifiers)
  identifiers: CodatDataContractsDatasetsBankingAccountIdentifiers;

  @SpeakeasyMetadata()
  @Expose({ name: "informalName" })
  informalName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "institution" })
  @Type(() => CodatDataContractsDatasetsBankingAccountInstitution)
  institution: CodatDataContractsDatasetsBankingAccountInstitution;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: CodatDataContractsDatasetsBankingAccountTypeEnum;
}