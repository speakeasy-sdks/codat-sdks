import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatDataContractsDatasetsValidDatatypeLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: string[];

  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: string;
}