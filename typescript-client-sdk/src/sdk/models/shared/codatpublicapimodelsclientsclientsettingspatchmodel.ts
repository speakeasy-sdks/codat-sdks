import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CodatPublicApiModelsClientsClientSettingsPatchModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "oneTimeSync" })
  oneTimeSync?: string;
}