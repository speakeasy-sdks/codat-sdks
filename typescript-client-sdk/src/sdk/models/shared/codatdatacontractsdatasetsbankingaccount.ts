import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankingAccountBalanceAmounts } from "./codatdatacontractsdatasetsbankingaccountbalanceamounts";
import { CodatDataContractsDatasetsBankingAccountIdentifiers } from "./codatdatacontractsdatasetsbankingaccountidentifiers";
import { CodatDataContractsDatasetsBankingAccountInstitution } from "./codatdatacontractsdatasetsbankingaccountinstitution";
import { CodatDataContractsDatasetsBankingAccountTypeEnum } from "./codatdatacontractsdatasetsbankingaccounttypeenum";


export class CodatDataContractsDatasetsBankingAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance: CodatDataContractsDatasetsBankingAccountBalanceAmounts;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=holder" })
  holder?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=identifiers" })
  identifiers: CodatDataContractsDatasetsBankingAccountIdentifiers;

  @SpeakeasyMetadata({ data: "json, name=informalName" })
  informalName?: string;

  @SpeakeasyMetadata({ data: "json, name=institution" })
  institution: CodatDataContractsDatasetsBankingAccountInstitution;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CodatDataContractsDatasetsBankingAccountTypeEnum;
}