import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsFinancialsMetricsMetric } from "./codatassessdatacontractsfinancialsmetricsmetric";
import { CodatAssessDataContractsFinancialsMetricsMetricDataSetError } from "./codatassessdatacontractsfinancialsmetricsmetricdataseterror";
import { CodatAssessDataContractsFinancialsMetricsMetricPeriodUnitEnum } from "./codatassessdatacontractsfinancialsmetricsmetricperiodunitenum";
import { Expose, Type } from "class-transformer";


export class CodatAssessDataContractsFinancialsMetricsFinancialMetricsDataSet extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata({ elemType: CodatAssessDataContractsFinancialsMetricsMetricDataSetError })
  @Expose({ name: "errors" })
  @Type(() => CodatAssessDataContractsFinancialsMetricsMetricDataSetError)
  errors?: CodatAssessDataContractsFinancialsMetricsMetricDataSetError[];

  @SpeakeasyMetadata({ elemType: CodatAssessDataContractsFinancialsMetricsMetric })
  @Expose({ name: "metrics" })
  @Type(() => CodatAssessDataContractsFinancialsMetricsMetric)
  metrics?: CodatAssessDataContractsFinancialsMetricsMetric[];

  @SpeakeasyMetadata()
  @Expose({ name: "periodUnit" })
  periodUnit?: CodatAssessDataContractsFinancialsMetricsMetricPeriodUnitEnum;
}