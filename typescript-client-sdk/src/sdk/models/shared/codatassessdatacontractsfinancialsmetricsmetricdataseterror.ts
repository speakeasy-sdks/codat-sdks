import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsFinancialsMetricsMetricDataSetErrorTypeEnum } from "./codatassessdatacontractsfinancialsmetricsmetricdataseterrortypeenum";


export class CodatAssessDataContractsFinancialsMetricsMetricDataSetError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CodatAssessDataContractsFinancialsMetricsMetricDataSetErrorTypeEnum;
}