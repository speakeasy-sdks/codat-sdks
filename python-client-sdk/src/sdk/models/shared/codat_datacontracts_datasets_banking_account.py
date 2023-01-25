import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_banking_accountbalanceamounts as shared_codat_datacontracts_datasets_banking_accountbalanceamounts
from ..shared import codat_datacontracts_datasets_banking_accountidentifiers as shared_codat_datacontracts_datasets_banking_accountidentifiers
from ..shared import codat_datacontracts_datasets_banking_accountinstitution as shared_codat_datacontracts_datasets_banking_accountinstitution
from ..shared import codat_datacontracts_datasets_banking_accounttype_enum as shared_codat_datacontracts_datasets_banking_accounttype_enum


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsBankingAccount:
    balance: shared_codat_datacontracts_datasets_banking_accountbalanceamounts.CodatDataContractsDatasetsBankingAccountBalanceAmounts = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    currency: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    identifiers: shared_codat_datacontracts_datasets_banking_accountidentifiers.CodatDataContractsDatasetsBankingAccountIdentifiers = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifiers') }})
    institution: shared_codat_datacontracts_datasets_banking_accountinstitution.CodatDataContractsDatasetsBankingAccountInstitution = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('institution') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: shared_codat_datacontracts_datasets_banking_accounttype_enum.CodatDataContractsDatasetsBankingAccountTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    holder: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holder') }})
    informal_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('informalName') }})
    modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source_modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
