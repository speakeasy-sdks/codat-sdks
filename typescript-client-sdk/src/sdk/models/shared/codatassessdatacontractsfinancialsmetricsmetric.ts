import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsFinancialsMetricsMetricError } from "./codatassessdatacontractsfinancialsmetricsmetricerror";
import { CodatAssessDataContractsFinancialsMetricsMetricKeyEnum } from "./codatassessdatacontractsfinancialsmetricsmetrickeyenum";
import { CodatAssessDataContractsFinancialsMetricsMetricPeriod } from "./codatassessdatacontractsfinancialsmetricsmetricperiod";
import { CodatAssessDataContractsFinancialsMetricsMetricUnitEnum } from "./codatassessdatacontractsfinancialsmetricsmetricunitenum";


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