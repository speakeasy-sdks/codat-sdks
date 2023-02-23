import dataclasses
import dateutil.parser
from ..shared import codat_datacontracts_datasets_commerce_accountbalance as shared_codat_datacontracts_datasets_commerce_accountbalance
from ..shared import codat_datacontracts_datasets_commerce_address as shared_codat_datacontracts_datasets_commerce_address
from ..shared import codat_datacontracts_datasets_commerce_phone as shared_codat_datacontracts_datasets_commerce_phone
from ..shared import codat_datacontracts_datasets_commerce_weblink as shared_codat_datacontracts_datasets_commerce_weblink
from dataclasses_json import dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsCommerceCompanyInfo:
    account_balances: Optional[list[shared_codat_datacontracts_datasets_commerce_accountbalance.CodatDataContractsDatasetsCommerceAccountBalance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountBalances') }})
    addresses: Optional[list[shared_codat_datacontracts_datasets_commerce_address.CodatDataContractsDatasetsCommerceAddress]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    base_currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseCurrency') }})
    commerce_platform_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commercePlatformRef') }})
    company_legal_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyLegalName') }})
    company_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    created_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    phone_numbers: Optional[list[shared_codat_datacontracts_datasets_commerce_phone.CodatDataContractsDatasetsCommercePhone]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumbers') }})
    registration_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrationNumber') }})
    source_modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source_urls: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceUrls') }})
    web_links: Optional[list[shared_codat_datacontracts_datasets_commerce_weblink.CodatDataContractsDatasetsCommerceWebLink]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webLinks') }})
    