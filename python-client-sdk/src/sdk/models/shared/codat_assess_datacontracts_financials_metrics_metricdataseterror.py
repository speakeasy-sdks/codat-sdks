import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_assess_datacontracts_financials_metrics_metricdataseterrortype_enum as shared_codat_assess_datacontracts_financials_metrics_metricdataseterrortype_enum


@dataclass_json
@dataclasses.dataclass
class CodatAssessDataContractsFinancialsMetricsMetricDataSetError:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    type: Optional[shared_codat_assess_datacontracts_financials_metrics_metricdataseterrortype_enum.CodatAssessDataContractsFinancialsMetricsMetricDataSetErrorTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
