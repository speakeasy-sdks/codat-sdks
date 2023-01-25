import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatAssessDataContractsFinancialsMetricsMetricPeriodError } from "./codatassessdatacontractsfinancialsmetricsmetricperioderror";
import { CodatAssessDataContractsFinancialsMetricsMetricPeriodInput } from "./codatassessdatacontractsfinancialsmetricsmetricperiodinput";



export class CodatAssessDataContractsFinancialsMetricsMetricPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: CodatAssessDataContractsFinancialsMetricsMetricPeriodError })
  errors?: CodatAssessDataContractsFinancialsMetricsMetricPeriodError[];

  @SpeakeasyMetadata({ data: "json, name=fromDate" })
  fromDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=inputs", elemType: CodatAssessDataContractsFinancialsMetricsMetricPeriodInput })
  inputs?: CodatAssessDataContractsFinancialsMetricsMetricPeriodInput[];

  @SpeakeasyMetadata({ data: "json, name=toDate" })
  toDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
