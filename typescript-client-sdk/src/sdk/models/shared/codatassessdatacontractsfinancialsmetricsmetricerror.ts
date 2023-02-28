import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsFinancialsMetricsMetricErrorTypeEnum } from "./codatassessdatacontractsfinancialsmetricsmetricerrortypeenum";
import { Expose } from "class-transformer";


export class CodatAssessDataContractsFinancialsMetricsMetricError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  details?: Record<string, string[]>;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CodatAssessDataContractsFinancialsMetricsMetricErrorTypeEnum;
}