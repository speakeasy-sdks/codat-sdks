from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import codat_datacontracts_datasets_cashflowstatement as shared_codat_datacontracts_datasets_cashflowstatement
from ..shared import codat_datacontracts_datasets_cashflowstatementreportingbasis_enum as shared_codat_datacontracts_datasets_cashflowstatementreportingbasis_enum
from ..shared import codat_datacontracts_datasets_cashflowstatementreportingdata_enum as shared_codat_datacontracts_datasets_cashflowstatementreportingdata_enum
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatPublicAPIModelsDataCashFlowStatementResponse:
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    report_basis: shared_codat_datacontracts_datasets_cashflowstatementreportingbasis_enum.CodatDataContractsDatasetsCashFlowStatementReportingBasisEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportBasis') }})
    report_input: shared_codat_datacontracts_datasets_cashflowstatementreportingdata_enum.CodatDataContractsDatasetsCashFlowStatementReportingDataEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportInput') }})
    reports: list[shared_codat_datacontracts_datasets_cashflowstatement.CodatDataContractsDatasetsCashFlowStatement] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reports') }})
    earliest_available_month: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('earliestAvailableMonth'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    most_recent_available_month: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mostRecentAvailableMonth'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    