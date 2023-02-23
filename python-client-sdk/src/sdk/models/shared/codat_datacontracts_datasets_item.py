import dataclasses
import dateutil.parser
from ..shared import codat_datacontracts_datasets_billitem as shared_codat_datacontracts_datasets_billitem
from ..shared import codat_datacontracts_datasets_invoiceitem as shared_codat_datacontracts_datasets_invoiceitem
from ..shared import codat_datacontracts_datasets_itemstatus_enum as shared_codat_datacontracts_datasets_itemstatus_enum
from ..shared import codat_datacontracts_datasets_itemtype_enum as shared_codat_datacontracts_datasets_itemtype_enum
from ..shared import codat_datacontracts_datasets_metadata as shared_codat_datacontracts_datasets_metadata
from dataclasses_json import dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsItem:
    is_bill_item: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isBillItem') }})
    is_invoice_item: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isInvoiceItem') }})
    item_status: shared_codat_datacontracts_datasets_itemstatus_enum.CodatDataContractsDatasetsItemStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemStatus') }})
    type: shared_codat_datacontracts_datasets_itemtype_enum.CodatDataContractsDatasetsItemTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    bill_item: Optional[shared_codat_datacontracts_datasets_billitem.CodatDataContractsDatasetsBillItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billItem') }})
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    invoice_item: Optional[shared_codat_datacontracts_datasets_invoiceitem.CodatDataContractsDatasetsInvoiceItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceItem') }})
    metadata: Optional[shared_codat_datacontracts_datasets_metadata.CodatDataContractsDatasetsMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    