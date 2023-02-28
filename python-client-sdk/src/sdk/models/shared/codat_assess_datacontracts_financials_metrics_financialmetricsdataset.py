from __future__ import annotations
import dataclasses
from ..shared import codat_assess_datacontracts_financials_metrics_metric as shared_codat_assess_datacontracts_financials_metrics_metric
from ..shared import codat_assess_datacontracts_financials_metrics_metricdataseterror as shared_codat_assess_datacontracts_financials_metrics_metricdataseterror
from ..shared import codat_assess_datacontracts_financials_metrics_metricperiodunit_enum as shared_codat_assess_datacontracts_financials_metrics_metricperiodunit_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatAssessDataContractsFinancialsMetricsFinancialMetricsDataSet:
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency'), 'exclude': lambda f: f is None }})
    errors: Optional[list[shared_codat_assess_datacontracts_financials_metrics_metricdataseterror.CodatAssessDataContractsFinancialsMetricsMetricDataSetError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors'), 'exclude': lambda f: f is None }})
    metrics: Optional[list[shared_codat_assess_datacontracts_financials_metrics_metric.CodatAssessDataContractsFinancialsMetricsMetric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics'), 'exclude': lambda f: f is None }})
    period_unit: Optional[shared_codat_assess_datacontracts_financials_metrics_metricperiodunit_enum.CodatAssessDataContractsFinancialsMetricsMetricPeriodUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodUnit'), 'exclude': lambda f: f is None }})
    