import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatDataContractsDatasetsMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}