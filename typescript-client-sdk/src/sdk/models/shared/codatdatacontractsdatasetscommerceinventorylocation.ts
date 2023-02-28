import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceLocationRef } from "./codatdatacontractsdatasetscommercelocationref";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsCommerceInventoryLocation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "locationRef" })
  @Type(() => CodatDataContractsDatasetsCommerceLocationRef)
  locationRef?: CodatDataContractsDatasetsCommerceLocationRef;

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity?: number;
}