import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsFinancialsMetricsMetricPeriodErrorTypeEnum } from "./codatassessdatacontractsfinancialsmetricsmetricperioderrortypeenum";
import { Expose } from "class-transformer";


export class CodatAssessDataContractsFinancialsMetricsMetricPeriodError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  details?: Record<string, string[]>;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CodatAssessDataContractsFinancialsMetricsMetricPeriodErrorTypeEnum;
}