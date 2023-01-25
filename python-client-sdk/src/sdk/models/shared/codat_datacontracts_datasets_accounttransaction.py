import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_accountref as shared_codat_datacontracts_datasets_accountref
from ..shared import codat_datacontracts_datasets_accounttransactionline as shared_codat_datacontracts_datasets_accounttransactionline
from ..shared import codat_datacontracts_datasets_metadata as shared_codat_datacontracts_datasets_metadata
from ..shared import codat_datacontracts_datasets_accounttransactionstatus_enum as shared_codat_datacontracts_datasets_accounttransactionstatus_enum


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsAccountTransaction:
    bank_account_ref: Optional[shared_codat_datacontracts_datasets_accountref.CodatDataContractsDatasetsAccountRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bankAccountRef') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    currency_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyRate') }})
    date_: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    lines: Optional[list[shared_codat_datacontracts_datasets_accounttransactionline.CodatDataContractsDatasetsAccountTransactionLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lines') }})
    metadata: Optional[shared_codat_datacontracts_datasets_metadata.CodatDataContractsDatasetsMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    source_modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[shared_codat_datacontracts_datasets_accounttransactionstatus_enum.CodatDataContractsDatasetsAccountTransactionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    total_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalAmount') }})
    transaction_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    
