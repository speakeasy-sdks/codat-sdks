import dataclasses
import dateutil.parser
from ..shared import codat_datacontracts_datasets_billcreditnotelineitem as shared_codat_datacontracts_datasets_billcreditnotelineitem
from ..shared import codat_datacontracts_datasets_creditnotestatus_enum as shared_codat_datacontracts_datasets_creditnotestatus_enum
from ..shared import codat_datacontracts_datasets_datainterfaces_supplementaldata as shared_codat_datacontracts_datasets_datainterfaces_supplementaldata
from ..shared import codat_datacontracts_datasets_detailedpaymentallocation as shared_codat_datacontracts_datasets_detailedpaymentallocation
from ..shared import codat_datacontracts_datasets_metadata as shared_codat_datacontracts_datasets_metadata
from ..shared import codat_datacontracts_datasets_supplierref as shared_codat_datacontracts_datasets_supplierref
from ..shared import codat_datacontracts_datasets_withholdingtax as shared_codat_datacontracts_datasets_withholdingtax
from dataclasses_json import dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsBillCreditNote:
    discount_percentage: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountPercentage') }})
    remaining_credit: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remainingCredit') }})
    status: shared_codat_datacontracts_datasets_creditnotestatus_enum.CodatDataContractsDatasetsCreditNoteStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    sub_total: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subTotal') }})
    total_amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalAmount') }})
    total_discount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalDiscount') }})
    total_tax_amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalTaxAmount') }})
    allocated_on_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocatedOnDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    bill_credit_note_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billCreditNoteNumber') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    currency_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyRate') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    issue_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    line_items: Optional[list[shared_codat_datacontracts_datasets_billcreditnotelineitem.CodatDataContractsDatasetsBillCreditNoteLineItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    metadata: Optional[shared_codat_datacontracts_datasets_metadata.CodatDataContractsDatasetsMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    payment_allocations: Optional[list[shared_codat_datacontracts_datasets_detailedpaymentallocation.CodatDataContractsDatasetsDetailedPaymentAllocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentAllocations') }})
    source_modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    supplemental_data: Optional[shared_codat_datacontracts_datasets_datainterfaces_supplementaldata.CodatDataContractsDatasetsDataInterfacesSupplementalData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supplementalData') }})
    supplier_ref: Optional[shared_codat_datacontracts_datasets_supplierref.CodatDataContractsDatasetsSupplierRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supplierRef') }})
    withholding_tax: Optional[list[shared_codat_datacontracts_datasets_withholdingtax.CodatDataContractsDatasetsWithholdingTax]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('withholdingTax') }})
    