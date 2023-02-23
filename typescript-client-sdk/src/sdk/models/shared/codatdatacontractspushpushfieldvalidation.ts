import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatDataContractsPushPushFieldValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field: string;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref?: string;
}