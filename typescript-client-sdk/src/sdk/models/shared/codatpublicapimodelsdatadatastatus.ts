import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class CodatPublicApiModelsDataDataStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "currentStatus" })
  currentStatus?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType: string;

  @SpeakeasyMetadata()
  @Expose({ name: "lastSuccessfulSync" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastSuccessfulSync?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "latestSuccessfulSyncId" })
  latestSuccessfulSyncId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "latestSyncId" })
  latestSyncId?: string;
}