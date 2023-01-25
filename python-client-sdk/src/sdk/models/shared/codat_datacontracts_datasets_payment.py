import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_accountref as shared_codat_datacontracts_datasets_accountref
from ..shared import codat_datacontracts_datasets_customerref as shared_codat_datacontracts_datasets_customerref
from ..shared import codat_datacontracts_datasets_paymentline as shared_codat_datacontracts_datasets_paymentline
from ..shared import codat_datacontracts_datasets_metadata as shared_codat_datacontracts_datasets_metadata
from ..shared import codat_datacontracts_datasets_paymentmethodref as shared_codat_datacontracts_datasets_paymentmethodref
from ..shared import codat_datacontracts_datasets_datainterfaces_supplementaldata as shared_codat_datacontracts_datasets_datainterfaces_supplementaldata


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsPayment:
    date_: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    account_ref: Optional[shared_codat_datacontracts_datasets_accountref.CodatDataContractsDatasetsAccountRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountRef') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    currency_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyRate') }})
    customer_ref: Optional[shared_codat_datacontracts_datasets_customerref.CodatDataContractsDatasetsCustomerRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerRef') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    lines: Optional[list[shared_codat_datacontracts_datasets_paymentline.CodatDataContractsDatasetsPaymentLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lines') }})
    metadata: Optional[shared_codat_datacontracts_datasets_metadata.CodatDataContractsDatasetsMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    payment_method_ref: Optional[shared_codat_datacontracts_datasets_paymentmethodref.CodatDataContractsDatasetsPaymentMethodRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMethodRef') }})
    reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    source_modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    supplemental_data: Optional[shared_codat_datacontracts_datasets_datainterfaces_supplementaldata.CodatDataContractsDatasetsDataInterfacesSupplementalData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supplementalData') }})
    total_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalAmount') }})
    
