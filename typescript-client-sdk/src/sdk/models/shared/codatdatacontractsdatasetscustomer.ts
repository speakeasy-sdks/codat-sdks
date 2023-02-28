import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAddress } from "./codatdatacontractsdatasetsaddress";
import { CodatDataContractsDatasetsContact } from "./codatdatacontractsdatasetscontact";
import { CodatDataContractsDatasetsCustomerStatusEnum } from "./codatdatacontractsdatasetscustomerstatusenum";
import { CodatDataContractsDatasetsDataInterfacesSupplementalData } from "./codatdatacontractsdatasetsdatainterfacessupplementaldata";
import { CodatDataContractsDatasetsMetadata } from "./codatdatacontractsdatasetsmetadata";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsAddress })
  @Expose({ name: "addresses" })
  @Type(() => CodatDataContractsDatasetsAddress)
  addresses?: CodatDataContractsDatasetsAddress[];

  @SpeakeasyMetadata()
  @Expose({ name: "contactName" })
  contactName?: string;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsContact })
  @Expose({ name: "contacts" })
  @Type(() => CodatDataContractsDatasetsContact)
  contacts?: CodatDataContractsDatasetsContact[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerName" })
  customerName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "defaultCurrency" })
  defaultCurrency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CodatDataContractsDatasetsMetadata)
  metadata?: CodatDataContractsDatasetsMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "registrationNumber" })
  registrationNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: CodatDataContractsDatasetsCustomerStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => CodatDataContractsDatasetsDataInterfacesSupplementalData)
  supplementalData?: CodatDataContractsDatasetsDataInterfacesSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "taxNumber" })
  taxNumber?: string;
}