import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatDataContractsDatasetsSupplierRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=supplierName" })
  supplierName?: string;
}