import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class CodatPublicApiModelsSyncSettingsSyncSettingModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "fetchOnFirstLink" })
  fetchOnFirstLink?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "isLocked" })
  isLocked?: boolean;

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
  @Expose({ name: "syncOrder" })
  syncOrder?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "syncSchedule" })
  syncSchedule?: number;
}