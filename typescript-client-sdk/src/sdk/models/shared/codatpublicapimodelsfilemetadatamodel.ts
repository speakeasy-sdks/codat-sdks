import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatPublicApiModelsFileMetadataModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=uploaded" })
  uploaded?: Date;
}