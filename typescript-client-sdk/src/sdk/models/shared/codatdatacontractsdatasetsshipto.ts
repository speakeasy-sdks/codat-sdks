import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAddress } from "./codatdatacontractsdatasetsaddress";
import { CodatDataContractsDatasetsShipToContact } from "./codatdatacontractsdatasetsshiptocontact";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsShipTo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(() => CodatDataContractsDatasetsAddress)
  address?: CodatDataContractsDatasetsAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "contact" })
  @Type(() => CodatDataContractsDatasetsShipToContact)
  contact?: CodatDataContractsDatasetsShipToContact;
}