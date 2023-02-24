from __future__ import annotations
import dataclasses
from ..shared import codat_assess_datacontracts_financials_metrics_metricdataseterrortype_enum as shared_codat_assess_datacontracts_financials_metrics_metricdataseterrortype_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatAssessDataContractsFinancialsMetricsMetricDataSetError:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message'), 'exclude': lambda f: f is None }})
    type: Optional[shared_codat_assess_datacontracts_financials_metrics_metricdataseterrortype_enum.CodatAssessDataContractsFinancialsMetricsMetricDataSetErrorTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type'), 'exclude': lambda f: f is None }})
    