import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatAssessDataContractsFinancialsMetricsMetricErrorTypeEnum } from "./codatassessdatacontractsfinancialsmetricsmetricerrortypeenum";



export class CodatAssessDataContractsFinancialsMetricsMetricError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: Record<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CodatAssessDataContractsFinancialsMetricsMetricErrorTypeEnum;
}
