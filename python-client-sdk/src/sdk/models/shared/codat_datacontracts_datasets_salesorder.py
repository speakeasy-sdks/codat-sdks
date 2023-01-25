import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_customerref as shared_codat_datacontracts_datasets_customerref
from ..shared import codat_datacontracts_datasets_invoicingstatus_enum as shared_codat_datacontracts_datasets_invoicingstatus_enum
from ..shared import codat_datacontracts_datasets_salesorderlineitem as shared_codat_datacontracts_datasets_salesorderlineitem
from ..shared import codat_datacontracts_datasets_metadata as shared_codat_datacontracts_datasets_metadata
from ..shared import codat_datacontracts_datasets_shipto as shared_codat_datacontracts_datasets_shipto
from ..shared import codat_datacontracts_datasets_salesorderstatus_enum as shared_codat_datacontracts_datasets_salesorderstatus_enum


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsSalesOrder:
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    currency_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyRate') }})
    customer_purchase_order_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerPurchaseOrderNumber') }})
    customer_ref: Optional[shared_codat_datacontracts_datasets_customerref.CodatDataContractsDatasetsCustomerRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerRef') }})
    expected_delivery_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expectedDeliveryDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    invoicing_status: Optional[shared_codat_datacontracts_datasets_invoicingstatus_enum.CodatDataContractsDatasetsInvoicingStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoicingStatus') }})
    issue_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    line_items: Optional[list[shared_codat_datacontracts_datasets_salesorderlineitem.CodatDataContractsDatasetsSalesOrderLineItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    metadata: Optional[shared_codat_datacontracts_datasets_metadata.CodatDataContractsDatasetsMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    sales_order_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salesOrderNumber') }})
    ship_to: Optional[shared_codat_datacontracts_datasets_shipto.CodatDataContractsDatasetsShipTo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipTo') }})
    source_modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[shared_codat_datacontracts_datasets_salesorderstatus_enum.CodatDataContractsDatasetsSalesOrderStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    sub_total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subTotal') }})
    total_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalAmount') }})
    total_discount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalDiscount') }})
    total_tax_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalTaxAmount') }})
    
