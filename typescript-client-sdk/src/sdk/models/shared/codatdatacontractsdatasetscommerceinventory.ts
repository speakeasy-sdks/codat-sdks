import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceInventoryLocation } from "./codatdatacontractsdatasetscommerceinventorylocation";



export class CodatDataContractsDatasetsCommerceInventory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locations", elemType: CodatDataContractsDatasetsCommerceInventoryLocation })
  locations?: CodatDataContractsDatasetsCommerceInventoryLocation[];

  @SpeakeasyMetadata({ data: "json, name=totalQuantity" })
  totalQuantity?: number;
}
