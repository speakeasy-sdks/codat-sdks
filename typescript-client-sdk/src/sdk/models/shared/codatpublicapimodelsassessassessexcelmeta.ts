import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class CodatPublicApiModelsAssessAssessExcelMeta extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "fileSize" })
  fileSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "inProgress" })
  inProgress?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "lastGenerated" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastGenerated?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "lastInvocationId" })
  lastInvocationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "queued" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  queued?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "reportType" })
  reportType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "success" })
  success?: boolean;
}