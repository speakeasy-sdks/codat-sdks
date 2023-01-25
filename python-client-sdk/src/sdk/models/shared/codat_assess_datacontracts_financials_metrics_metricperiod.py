import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_assess_datacontracts_financials_metrics_metricperioderror as shared_codat_assess_datacontracts_financials_metrics_metricperioderror
from ..shared import codat_assess_datacontracts_financials_metrics_metricperiodinput as shared_codat_assess_datacontracts_financials_metrics_metricperiodinput


@dataclass_json
@dataclasses.dataclass
class CodatAssessDataContractsFinancialsMetricsMetricPeriod:
    errors: Optional[list[shared_codat_assess_datacontracts_financials_metrics_metricperioderror.CodatAssessDataContractsFinancialsMetricsMetricPeriodError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    from_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    inputs: Optional[list[shared_codat_assess_datacontracts_financials_metrics_metricperiodinput.CodatAssessDataContractsFinancialsMetricsMetricPeriodInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputs') }})
    to_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
