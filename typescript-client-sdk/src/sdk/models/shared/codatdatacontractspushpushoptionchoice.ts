import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsPushPushOption } from "./codatdatacontractspushpushoption";
import { CodatDataContractsPushOptionTypeEnum } from "./codatdatacontractspushoptiontypeenum";
import { CodatDataContractsPushPushValidationInfo } from "./codatdatacontractspushpushvalidationinfo";



export class CodatDataContractsPushPushOptionChoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=options", elemType: CodatDataContractsPushPushOptionChoice })
  options?: CodatDataContractsPushPushOptionChoice[];

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: CodatDataContractsPushPushOption })
  properties?: Record<string, CodatDataContractsPushPushOption>;

  @SpeakeasyMetadata({ data: "json, name=rel" })
  rel?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CodatDataContractsPushOptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: CodatDataContractsPushPushValidationInfo;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
