import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_billpaymentlinelink as shared_codat_datacontracts_datasets_billpaymentlinelink


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsBillPaymentLine:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    allocated_on_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocatedOnDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    links: Optional[list[shared_codat_datacontracts_datasets_billpaymentlinelink.CodatDataContractsDatasetsBillPaymentLineLink]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
