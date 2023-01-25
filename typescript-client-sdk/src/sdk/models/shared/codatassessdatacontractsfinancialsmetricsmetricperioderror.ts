import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatAssessDataContractsFinancialsMetricsMetricPeriodErrorTypeEnum } from "./codatassessdatacontractsfinancialsmetricsmetricperioderrortypeenum";



export class CodatAssessDataContractsFinancialsMetricsMetricPeriodError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: Record<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CodatAssessDataContractsFinancialsMetricsMetricPeriodErrorTypeEnum;
}
