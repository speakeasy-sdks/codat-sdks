import dataclasses
import dateutil.parser
from ..shared import codat_datacontracts_datasets_agedoutstandingamountdetail as shared_codat_datacontracts_datasets_agedoutstandingamountdetail
from dataclasses_json import dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsAgedOutstandingAmount:
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    details: Optional[list[shared_codat_datacontracts_datasets_agedoutstandingamountdetail.CodatDataContractsDatasetsAgedOutstandingAmountDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    from_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    to_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    