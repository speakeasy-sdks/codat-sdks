import dataclasses
from ..shared import codat_datacontracts_datasets_commerce_discountallocation as shared_codat_datacontracts_datasets_commerce_discountallocation
from ..shared import codat_datacontracts_datasets_commerce_productref as shared_codat_datacontracts_datasets_commerce_productref
from ..shared import codat_datacontracts_datasets_commerce_taxcomponentallocation as shared_codat_datacontracts_datasets_commerce_taxcomponentallocation
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsCommerceOrderLineItem:
    discount_allocations: Optional[list[shared_codat_datacontracts_datasets_commerce_discountallocation.CodatDataContractsDatasetsCommerceDiscountAllocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountAllocations') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    product_ref: Optional[shared_codat_datacontracts_datasets_commerce_productref.CodatDataContractsDatasetsCommerceProductRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productRef') }})
    product_variant_ref: Optional[shared_codat_datacontracts_datasets_commerce_productref.CodatDataContractsDatasetsCommerceProductRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productVariantRef') }})
    quantity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    taxes: Optional[list[shared_codat_datacontracts_datasets_commerce_taxcomponentallocation.CodatDataContractsDatasetsCommerceTaxComponentAllocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxes') }})
    tax_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxPercentage') }})
    total_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalAmount') }})
    total_tax_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalTaxAmount') }})
    unit_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitPrice') }})
    