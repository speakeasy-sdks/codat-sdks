import dataclasses
from ..shared import codat_assess_datacontracts_financials_metrics_metricerror as shared_codat_assess_datacontracts_financials_metrics_metricerror
from ..shared import codat_assess_datacontracts_financials_metrics_metrickey_enum as shared_codat_assess_datacontracts_financials_metrics_metrickey_enum
from ..shared import codat_assess_datacontracts_financials_metrics_metricperiod as shared_codat_assess_datacontracts_financials_metrics_metricperiod
from ..shared import codat_assess_datacontracts_financials_metrics_metricunit_enum as shared_codat_assess_datacontracts_financials_metrics_metricunit_enum
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatAssessDataContractsFinancialsMetricsMetric:
    errors: Optional[list[shared_codat_assess_datacontracts_financials_metrics_metricerror.CodatAssessDataContractsFinancialsMetricsMetricError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    key: Optional[shared_codat_assess_datacontracts_financials_metrics_metrickey_enum.CodatAssessDataContractsFinancialsMetricsMetricKeyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    metric_unit: Optional[shared_codat_assess_datacontracts_financials_metrics_metricunit_enum.CodatAssessDataContractsFinancialsMetricsMetricUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricUnit') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    periods: Optional[list[shared_codat_assess_datacontracts_financials_metrics_metricperiod.CodatAssessDataContractsFinancialsMetricsMetricPeriod]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periods') }})
    