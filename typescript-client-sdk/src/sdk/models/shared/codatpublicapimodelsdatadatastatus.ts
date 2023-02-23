import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatPublicApiModelsDataDataStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentStatus" })
  currentStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType: string;

  @SpeakeasyMetadata({ data: "json, name=lastSuccessfulSync" })
  lastSuccessfulSync?: Date;

  @SpeakeasyMetadata({ data: "json, name=latestSuccessfulSyncId" })
  latestSuccessfulSyncId?: string;

  @SpeakeasyMetadata({ data: "json, name=latestSyncId" })
  latestSyncId?: string;
}