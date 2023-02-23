import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAddress } from "./codatdatacontractsdatasetsaddress";
import { CodatDataContractsDatasetsShipToContact } from "./codatdatacontractsdatasetsshiptocontact";


export class CodatDataContractsDatasetsShipTo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: CodatDataContractsDatasetsAddress;

  @SpeakeasyMetadata({ data: "json, name=contact" })
  contact?: CodatDataContractsDatasetsShipToContact;
}