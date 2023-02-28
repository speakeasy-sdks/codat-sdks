from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_commerce_discountallocation as shared_codat_datacontracts_datasets_commerce_discountallocation
from ..shared import codat_datacontracts_datasets_commerce_productref as shared_codat_datacontracts_datasets_commerce_productref
from ..shared import codat_datacontracts_datasets_commerce_taxcomponentallocation as shared_codat_datacontracts_datasets_commerce_taxcomponentallocation
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataContractsDatasetsCommerceOrderLineItem:
    discount_allocations: Optional[list[shared_codat_datacontracts_datasets_commerce_discountallocation.CodatDataContractsDatasetsCommerceDiscountAllocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountAllocations'), 'exclude': lambda f: f is None }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id'), 'exclude': lambda f: f is None }})
    product_ref: Optional[shared_codat_datacontracts_datasets_commerce_productref.CodatDataContractsDatasetsCommerceProductRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productRef'), 'exclude': lambda f: f is None }})
    product_variant_ref: Optional[shared_codat_datacontracts_datasets_commerce_productref.CodatDataContractsDatasetsCommerceProductRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productVariantRef'), 'exclude': lambda f: f is None }})
    quantity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity'), 'exclude': lambda f: f is None }})
    taxes: Optional[list[shared_codat_datacontracts_datasets_commerce_taxcomponentallocation.CodatDataContractsDatasetsCommerceTaxComponentAllocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxes'), 'exclude': lambda f: f is None }})
    tax_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxPercentage'), 'exclude': lambda f: f is None }})
    total_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalAmount'), 'exclude': lambda f: f is None }})
    total_tax_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalTaxAmount'), 'exclude': lambda f: f is None }})
    unit_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitPrice'), 'exclude': lambda f: f is None }})
    