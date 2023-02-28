import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAccountStatusEnum } from "./codatdatacontractsdatasetsaccountstatusenum";
import { CodatDataContractsDatasetsAccountTypeEnum } from "./codatdatacontractsdatasetsaccounttypeenum";
import { CodatDataContractsDatasetsMetadata } from "./codatdatacontractsdatasetsmetadata";
import { CodatDataContractsDatasetsValidDatatypeLinks } from "./codatdatacontractsdatasetsvaliddatatypelinks";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsAccount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currentBalance" })
  currentBalance?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "fullyQualifiedCategory" })
  fullyQualifiedCategory?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "fullyQualifiedName" })
  fullyQualifiedName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "isBankAccount" })
  isBankAccount: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CodatDataContractsDatasetsMetadata)
  metadata?: CodatDataContractsDatasetsMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "nominalCode" })
  nominalCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: CodatDataContractsDatasetsAccountStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: CodatDataContractsDatasetsAccountTypeEnum;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsValidDatatypeLinks })
  @Expose({ name: "validDatatypeLinks" })
  @Type(() => CodatDataContractsDatasetsValidDatatypeLinks)
  validDatatypeLinks?: CodatDataContractsDatasetsValidDatatypeLinks[];
}