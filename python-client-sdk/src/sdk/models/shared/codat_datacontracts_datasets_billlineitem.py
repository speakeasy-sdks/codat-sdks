import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_accountref as shared_codat_datacontracts_datasets_accountref
from ..shared import codat_datacontracts_datasets_itemref as shared_codat_datacontracts_datasets_itemref
from ..shared import codat_datacontracts_datasets_taxrateref as shared_codat_datacontracts_datasets_taxrateref
from ..shared import codat_datacontracts_datasets_accountspayabletracking as shared_codat_datacontracts_datasets_accountspayabletracking
from ..shared import codat_datacontracts_datasets_trackingcategoryref as shared_codat_datacontracts_datasets_trackingcategoryref


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsBillLineItem:
    quantity: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    unit_amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitAmount') }})
    account_ref: Optional[shared_codat_datacontracts_datasets_accountref.CodatDataContractsDatasetsAccountRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountRef') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    discount_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountAmount') }})
    discount_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountPercentage') }})
    is_direct_cost: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDirectCost') }})
    item_ref: Optional[shared_codat_datacontracts_datasets_itemref.CodatDataContractsDatasetsItemRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemRef') }})
    sub_total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subTotal') }})
    tax_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxAmount') }})
    tax_rate_ref: Optional[shared_codat_datacontracts_datasets_taxrateref.CodatDataContractsDatasetsTaxRateRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxRateRef') }})
    total_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalAmount') }})
    tracking: Optional[shared_codat_datacontracts_datasets_accountspayabletracking.CodatDataContractsDatasetsAccountsPayableTracking] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracking') }})
    tracking_category_refs: Optional[list[shared_codat_datacontracts_datasets_trackingcategoryref.CodatDataContractsDatasetsTrackingCategoryRef]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingCategoryRefs') }})
    
