import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CodatPublicApiModelsClientsClientSyncSettingsSinglePutModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fetchOnFirstLink" })
  fetchOnFirstLink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=monthsToSync" })
  monthsToSync?: number;

  @SpeakeasyMetadata({ data: "json, name=syncFromUtc" })
  syncFromUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=syncFromWindow" })
  syncFromWindow?: number;

  @SpeakeasyMetadata({ data: "json, name=syncSchedule" })
  syncSchedule?: number;
}
