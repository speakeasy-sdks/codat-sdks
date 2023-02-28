from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import codat_assess_datacontracts_financials_metrics_metricperioderror as shared_codat_assess_datacontracts_financials_metrics_metricperioderror
from ..shared import codat_assess_datacontracts_financials_metrics_metricperiodinput as shared_codat_assess_datacontracts_financials_metrics_metricperiodinput
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatAssessDataContractsFinancialsMetricsMetricPeriod:
    errors: Optional[list[shared_codat_assess_datacontracts_financials_metrics_metricperioderror.CodatAssessDataContractsFinancialsMetricsMetricPeriodError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors'), 'exclude': lambda f: f is None }})
    from_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    inputs: Optional[list[shared_codat_assess_datacontracts_financials_metrics_metricperiodinput.CodatAssessDataContractsFinancialsMetricsMetricPeriodInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputs'), 'exclude': lambda f: f is None }})
    to_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value'), 'exclude': lambda f: f is None }})
    