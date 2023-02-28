import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsFinancialsMetricsMetricDataSetErrorTypeEnum } from "./codatassessdatacontractsfinancialsmetricsmetricdataseterrortypeenum";
import { Expose } from "class-transformer";


export class CodatAssessDataContractsFinancialsMetricsMetricDataSetError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CodatAssessDataContractsFinancialsMetricsMetricDataSetErrorTypeEnum;
}