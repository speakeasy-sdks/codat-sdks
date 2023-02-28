import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class CodatPublicApiModelsClientsClientSyncSettingsSinglePutModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "fetchOnFirstLink" })
  fetchOnFirstLink?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "monthsToSync" })
  monthsToSync?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "syncFromUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  syncFromUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "syncFromWindow" })
  syncFromWindow?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "syncSchedule" })
  syncSchedule?: number;
}