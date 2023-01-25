import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_cashflowstatementreportingbasis_enum as shared_codat_datacontracts_datasets_cashflowstatementreportingbasis_enum
from ..shared import codat_datacontracts_datasets_cashflowstatementreportingdata_enum as shared_codat_datacontracts_datasets_cashflowstatementreportingdata_enum
from ..shared import codat_datacontracts_datasets_cashflowstatement as shared_codat_datacontracts_datasets_cashflowstatement


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsDataCashFlowStatementResponse:
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    report_basis: shared_codat_datacontracts_datasets_cashflowstatementreportingbasis_enum.CodatDataContractsDatasetsCashFlowStatementReportingBasisEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportBasis') }})
    report_input: shared_codat_datacontracts_datasets_cashflowstatementreportingdata_enum.CodatDataContractsDatasetsCashFlowStatementReportingDataEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportInput') }})
    reports: list[shared_codat_datacontracts_datasets_cashflowstatement.CodatDataContractsDatasetsCashFlowStatement] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reports') }})
    earliest_available_month: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('earliestAvailableMonth'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    most_recent_available_month: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mostRecentAvailableMonth'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
