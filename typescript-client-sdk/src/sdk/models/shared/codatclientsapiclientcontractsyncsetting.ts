import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatClientsApiClientContractSyncSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=fetchOnFirstLink" })
  fetchOnFirstLink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=monthsToSync" })
  monthsToSync?: number;

  @SpeakeasyMetadata({ data: "json, name=syncFromUtc" })
  syncFromUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=syncFromWindow" })
  syncFromWindow?: number;

  @SpeakeasyMetadata({ data: "json, name=syncOrder" })
  syncOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=syncSchedule" })
  syncSchedule?: number;
}