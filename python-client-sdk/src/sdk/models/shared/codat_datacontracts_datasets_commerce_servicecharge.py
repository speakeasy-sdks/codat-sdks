import dataclasses
from ..shared import codat_datacontracts_datasets_commerce_servicechargetype_enum as shared_codat_datacontracts_datasets_commerce_servicechargetype_enum
from ..shared import codat_datacontracts_datasets_commerce_taxcomponentallocation as shared_codat_datacontracts_datasets_commerce_taxcomponentallocation
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsCommerceServiceCharge:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    quantity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    tax_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxAmount') }})
    taxes: Optional[list[shared_codat_datacontracts_datasets_commerce_taxcomponentallocation.CodatDataContractsDatasetsCommerceTaxComponentAllocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxes') }})
    tax_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxPercentage') }})
    total_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalAmount') }})
    type: Optional[shared_codat_datacontracts_datasets_commerce_servicechargetype_enum.CodatDataContractsDatasetsCommerceServiceChargeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    