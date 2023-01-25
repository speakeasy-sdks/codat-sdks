import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_metadata as shared_codat_datacontracts_datasets_metadata
from ..shared import codat_datacontracts_datasets_paymentmethodstatus_enum as shared_codat_datacontracts_datasets_paymentmethodstatus_enum
from ..shared import codat_datacontracts_datasets_paymentmethodtype_enum as shared_codat_datacontracts_datasets_paymentmethodtype_enum


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsPaymentMethod:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    metadata: Optional[shared_codat_datacontracts_datasets_metadata.CodatDataContractsDatasetsMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[shared_codat_datacontracts_datasets_paymentmethodstatus_enum.CodatDataContractsDatasetsPaymentMethodStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[shared_codat_datacontracts_datasets_paymentmethodtype_enum.CodatDataContractsDatasetsPaymentMethodTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
