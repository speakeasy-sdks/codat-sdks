import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsFinancialsMetricsMetricError } from "./codatassessdatacontractsfinancialsmetricsmetricerror";
import { CodatAssessDataContractsFinancialsMetricsMetricKeyEnum } from "./codatassessdatacontractsfinancialsmetricsmetrickeyenum";
import { CodatAssessDataContractsFinancialsMetricsMetricPeriod } from "./codatassessdatacontractsfinancialsmetricsmetricperiod";
import { CodatAssessDataContractsFinancialsMetricsMetricUnitEnum } from "./codatassessdatacontractsfinancialsmetricsmetricunitenum";
import { Expose, Type } from "class-transformer";


export class CodatAssessDataContractsFinancialsMetricsMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatAssessDataContractsFinancialsMetricsMetricError })
  @Expose({ name: "errors" })
  @Type(() => CodatAssessDataContractsFinancialsMetricsMetricError)
  errors?: CodatAssessDataContractsFinancialsMetricsMetricError[];

  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key?: CodatAssessDataContractsFinancialsMetricsMetricKeyEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "metricUnit" })
  metricUnit?: CodatAssessDataContractsFinancialsMetricsMetricUnitEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata({ elemType: CodatAssessDataContractsFinancialsMetricsMetricPeriod })
  @Expose({ name: "periods" })
  @Type(() => CodatAssessDataContractsFinancialsMetricsMetricPeriod)
  periods?: CodatAssessDataContractsFinancialsMetricsMetricPeriod[];
}