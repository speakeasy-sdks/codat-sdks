import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceLocationRef } from "./codatdatacontractsdatasetscommercelocationref";


export class CodatDataContractsDatasetsCommerceInventoryLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locationRef" })
  locationRef?: CodatDataContractsDatasetsCommerceLocationRef;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;
}