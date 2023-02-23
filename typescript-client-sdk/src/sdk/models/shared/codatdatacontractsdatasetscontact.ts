import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAddress } from "./codatdatacontractsdatasetsaddress";
import { CodatDataContractsDatasetsCustomerStatusEnum } from "./codatdatacontractsdatasetscustomerstatusenum";
import { CodatDataContractsDatasetsPhone } from "./codatdatacontractsdatasetsphone";


export class CodatDataContractsDatasetsContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: CodatDataContractsDatasetsAddress;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phone", elemType: CodatDataContractsDatasetsPhone })
  phone?: CodatDataContractsDatasetsPhone[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: CodatDataContractsDatasetsCustomerStatusEnum;
}