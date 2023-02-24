from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import codat_datacontracts_datasets_commerce_accountbalance as shared_codat_datacontracts_datasets_commerce_accountbalance
from ..shared import codat_datacontracts_datasets_commerce_address as shared_codat_datacontracts_datasets_commerce_address
from ..shared import codat_datacontracts_datasets_commerce_phone as shared_codat_datacontracts_datasets_commerce_phone
from ..shared import codat_datacontracts_datasets_commerce_weblink as shared_codat_datacontracts_datasets_commerce_weblink
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataContractsDatasetsCommerceCompanyInfo:
    account_balances: Optional[list[shared_codat_datacontracts_datasets_commerce_accountbalance.CodatDataContractsDatasetsCommerceAccountBalance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountBalances'), 'exclude': lambda f: f is None }})
    addresses: Optional[list[shared_codat_datacontracts_datasets_commerce_address.CodatDataContractsDatasetsCommerceAddress]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses'), 'exclude': lambda f: f is None }})
    base_currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseCurrency'), 'exclude': lambda f: f is None }})
    commerce_platform_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commercePlatformRef'), 'exclude': lambda f: f is None }})
    company_legal_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyLegalName'), 'exclude': lambda f: f is None }})
    company_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName'), 'exclude': lambda f: f is None }})
    created_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    phone_numbers: Optional[list[shared_codat_datacontracts_datasets_commerce_phone.CodatDataContractsDatasetsCommercePhone]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumbers'), 'exclude': lambda f: f is None }})
    registration_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrationNumber'), 'exclude': lambda f: f is None }})
    source_modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    source_urls: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceUrls'), 'exclude': lambda f: f is None }})
    web_links: Optional[list[shared_codat_datacontracts_datasets_commerce_weblink.CodatDataContractsDatasetsCommerceWebLink]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webLinks'), 'exclude': lambda f: f is None }})
    