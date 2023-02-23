import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAddress } from "./codatdatacontractsdatasetsaddress";
import { CodatDataContractsDatasetsContact } from "./codatdatacontractsdatasetscontact";
import { CodatDataContractsDatasetsCustomerStatusEnum } from "./codatdatacontractsdatasetscustomerstatusenum";
import { CodatDataContractsDatasetsDataInterfacesSupplementalData } from "./codatdatacontractsdatasetsdatainterfacessupplementaldata";
import { CodatDataContractsDatasetsMetadata } from "./codatdatacontractsdatasetsmetadata";


export class CodatDataContractsDatasetsCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: CodatDataContractsDatasetsAddress })
  addresses?: CodatDataContractsDatasetsAddress[];

  @SpeakeasyMetadata({ data: "json, name=contactName" })
  contactName?: string;

  @SpeakeasyMetadata({ data: "json, name=contacts", elemType: CodatDataContractsDatasetsContact })
  contacts?: CodatDataContractsDatasetsContact[];

  @SpeakeasyMetadata({ data: "json, name=customerName" })
  customerName?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultCurrency" })
  defaultCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: CodatDataContractsDatasetsMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=registrationNumber" })
  registrationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: CodatDataContractsDatasetsCustomerStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: CodatDataContractsDatasetsDataInterfacesSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=taxNumber" })
  taxNumber?: string;
}