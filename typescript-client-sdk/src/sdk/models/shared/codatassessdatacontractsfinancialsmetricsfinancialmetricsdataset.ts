import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsFinancialsMetricsMetric } from "./codatassessdatacontractsfinancialsmetricsmetric";
import { CodatAssessDataContractsFinancialsMetricsMetricDataSetError } from "./codatassessdatacontractsfinancialsmetricsmetricdataseterror";
import { CodatAssessDataContractsFinancialsMetricsMetricPeriodUnitEnum } from "./codatassessdatacontractsfinancialsmetricsmetricperiodunitenum";


export class CodatAssessDataContractsFinancialsMetricsFinancialMetricsDataSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: CodatAssessDataContractsFinancialsMetricsMetricDataSetError })
  errors?: CodatAssessDataContractsFinancialsMetricsMetricDataSetError[];

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: CodatAssessDataContractsFinancialsMetricsMetric })
  metrics?: CodatAssessDataContractsFinancialsMetricsMetric[];

  @SpeakeasyMetadata({ data: "json, name=periodUnit" })
  periodUnit?: CodatAssessDataContractsFinancialsMetricsMetricPeriodUnitEnum;
}