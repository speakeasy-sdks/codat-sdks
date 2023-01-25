import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_address as shared_codat_datacontracts_datasets_address
from ..shared import codat_datacontracts_datasets_metadata as shared_codat_datacontracts_datasets_metadata
from ..shared import codat_datacontracts_datasets_supplierstatus_enum as shared_codat_datacontracts_datasets_supplierstatus_enum
from ..shared import codat_datacontracts_datasets_datainterfaces_supplementaldata as shared_codat_datacontracts_datasets_datainterfaces_supplementaldata


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsSupplier:
    status: shared_codat_datacontracts_datasets_supplierstatus_enum.CodatDataContractsDatasetsSupplierStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    addresses: Optional[list[shared_codat_datacontracts_datasets_address.CodatDataContractsDatasetsAddress]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    contact_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactName') }})
    default_currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultCurrency') }})
    email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    metadata: Optional[shared_codat_datacontracts_datasets_metadata.CodatDataContractsDatasetsMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    registration_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrationNumber') }})
    source_modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    supplemental_data: Optional[shared_codat_datacontracts_datasets_datainterfaces_supplementaldata.CodatDataContractsDatasetsDataInterfacesSupplementalData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supplementalData') }})
    supplier_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supplierName') }})
    tax_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxNumber') }})
    
