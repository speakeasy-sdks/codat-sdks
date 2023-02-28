import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CodatPublicApiModelsRulesNotifiers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "emails" })
  emails?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "webhook" })
  webhook?: string;
}