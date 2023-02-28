import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CodatPublicApiModelsDataValidDatatypeLinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "links" })
  links?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "property" })
  property?: string;
}