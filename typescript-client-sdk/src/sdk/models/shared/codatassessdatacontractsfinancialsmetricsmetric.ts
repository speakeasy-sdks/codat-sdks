import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatAssessDataContractsFinancialsMetricsMetricError } from "./codatassessdatacontractsfinancialsmetricsmetricerror";
import { CodatAssessDataContractsFinancialsMetricsMetricKeyEnum } from "./codatassessdatacontractsfinancialsmetricsmetrickeyenum";
import { CodatAssessDataContractsFinancialsMetricsMetricUnitEnum } from "./codatassessdatacontractsfinancialsmetricsmetricunitenum";
import { CodatAssessDataContractsFinancialsMetricsMetricPeriod } from "./codatassessdatacontractsfinancialsmetricsmetricperiod";



export class CodatAssessDataContractsFinancialsMetricsMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: CodatAssessDataContractsFinancialsMetricsMetricError })
  errors?: CodatAssessDataContractsFinancialsMetricsMetricError[];

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: CodatAssessDataContractsFinancialsMetricsMetricKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=metricUnit" })
  metricUnit?: CodatAssessDataContractsFinancialsMetricsMetricUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=periods", elemType: CodatAssessDataContractsFinancialsMetricsMetricPeriod })
  periods?: CodatAssessDataContractsFinancialsMetricsMetricPeriod[];
}
