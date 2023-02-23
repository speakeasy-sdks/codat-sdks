import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatPublicApiModelsRulesNotifiers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emails" })
  emails?: string[];

  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook?: string;
}