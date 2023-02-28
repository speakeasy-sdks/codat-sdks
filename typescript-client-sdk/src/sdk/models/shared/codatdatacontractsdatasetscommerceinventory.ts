import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceInventoryLocation } from "./codatdatacontractsdatasetscommerceinventorylocation";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsCommerceInventory extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommerceInventoryLocation })
  @Expose({ name: "locations" })
  @Type(() => CodatDataContractsDatasetsCommerceInventoryLocation)
  locations?: CodatDataContractsDatasetsCommerceInventoryLocation[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalQuantity" })
  totalQuantity?: number;
}