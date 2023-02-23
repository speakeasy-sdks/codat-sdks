import dataclasses
import dateutil.parser
from ..shared import codat_datacontracts_datasets_transactiontype_enum as shared_codat_datacontracts_datasets_transactiontype_enum
from dataclasses_json import dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsBankStatementLine:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    balance: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    date_: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reconciled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reconciled') }})
    transaction_type: shared_codat_datacontracts_datasets_transactiontype_enum.CodatDataContractsDatasetsTransactionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionType') }})
    counterparty: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counterparty') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    source_modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    