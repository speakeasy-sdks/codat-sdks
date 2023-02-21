import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatPublicApiModelsDataDatasetStatusEnum } from "./codatpublicapimodelsdatadatasetstatusenum";



export class CodatPublicApiModelsDataDataSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "json, name=completed" })
  completed?: Date;

  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=datasetLogsUrl" })
  datasetLogsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=isCompleted" })
  isCompleted: boolean;

  @SpeakeasyMetadata({ data: "json, name=isErrored" })
  isErrored: boolean;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=requested" })
  requested: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: CodatPublicApiModelsDataDatasetStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=validationinformationUrl" })
  validationinformationUrl?: string;
}
