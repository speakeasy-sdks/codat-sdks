import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_address as shared_codat_datacontracts_datasets_address
from ..shared import codat_datacontracts_datasets_phone as shared_codat_datacontracts_datasets_phone
from ..shared import codat_datacontracts_datasets_customerstatus_enum as shared_codat_datacontracts_datasets_customerstatus_enum


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsContact:
    status: shared_codat_datacontracts_datasets_customerstatus_enum.CodatDataContractsDatasetsCustomerStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    address: Optional[shared_codat_datacontracts_datasets_address.CodatDataContractsDatasetsAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phone: Optional[list[shared_codat_datacontracts_datasets_phone.CodatDataContractsDatasetsPhone]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    
