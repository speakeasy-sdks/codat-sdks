import dataclasses
from ..shared import codat_assess_datacontracts_financials_metrics_metric as shared_codat_assess_datacontracts_financials_metrics_metric
from ..shared import codat_assess_datacontracts_financials_metrics_metricdataseterror as shared_codat_assess_datacontracts_financials_metrics_metricdataseterror
from ..shared import codat_assess_datacontracts_financials_metrics_metricperiodunit_enum as shared_codat_assess_datacontracts_financials_metrics_metricperiodunit_enum
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatAssessDataContractsFinancialsMetricsFinancialMetricsDataSet:
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    errors: Optional[list[shared_codat_assess_datacontracts_financials_metrics_metricdataseterror.CodatAssessDataContractsFinancialsMetricsMetricDataSetError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    metrics: Optional[list[shared_codat_assess_datacontracts_financials_metrics_metric.CodatAssessDataContractsFinancialsMetricsMetric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    period_unit: Optional[shared_codat_assess_datacontracts_financials_metrics_metricperiodunit_enum.CodatAssessDataContractsFinancialsMetricsMetricPeriodUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodUnit') }})
    