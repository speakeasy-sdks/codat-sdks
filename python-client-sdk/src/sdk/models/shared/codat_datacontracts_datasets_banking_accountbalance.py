import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_banking_accountbalanceamounts as shared_codat_datacontracts_datasets_banking_accountbalanceamounts


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsBankingAccountBalance:
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    balance: shared_codat_datacontracts_datasets_banking_accountbalanceamounts.CodatDataContractsDatasetsBankingAccountBalanceAmounts = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    date_: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source_modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
