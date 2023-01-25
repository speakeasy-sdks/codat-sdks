import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_balancesheet as shared_codat_datacontracts_datasets_balancesheet


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsDataBalanceSheetResponse:
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    reports: list[shared_codat_datacontracts_datasets_balancesheet.CodatDataContractsDatasetsBalanceSheet] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reports') }})
    earliest_available_month: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('earliestAvailableMonth'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    most_recent_available_month: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mostRecentAvailableMonth'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
