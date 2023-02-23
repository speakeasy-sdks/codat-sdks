import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatPublicApiModelsAssessAssessExcelMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=fileSize" })
  fileSize?: number;

  @SpeakeasyMetadata({ data: "json, name=inProgress" })
  inProgress?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastGenerated" })
  lastGenerated?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastInvocationId" })
  lastInvocationId?: string;

  @SpeakeasyMetadata({ data: "json, name=queued" })
  queued?: Date;

  @SpeakeasyMetadata({ data: "json, name=reportType" })
  reportType?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}