import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsMetadata } from "./codatdatacontractsdatasetsmetadata";
import { CodatDataContractsDatasetsAccountStatusEnum } from "./codatdatacontractsdatasetsaccountstatusenum";
import { CodatDataContractsDatasetsAccountTypeEnum } from "./codatdatacontractsdatasetsaccounttypeenum";
import { CodatDataContractsDatasetsValidDatatypeLinks } from "./codatdatacontractsdatasetsvaliddatatypelinks";



export class CodatDataContractsDatasetsAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currentBalance" })
  currentBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=fullyQualifiedCategory" })
  fullyQualifiedCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=fullyQualifiedName" })
  fullyQualifiedName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isBankAccount" })
  isBankAccount: boolean;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: CodatDataContractsDatasetsMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nominalCode" })
  nominalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: CodatDataContractsDatasetsAccountStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CodatDataContractsDatasetsAccountTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=validDatatypeLinks", elemType: CodatDataContractsDatasetsValidDatatypeLinks })
  validDatatypeLinks?: CodatDataContractsDatasetsValidDatatypeLinks[];
}
