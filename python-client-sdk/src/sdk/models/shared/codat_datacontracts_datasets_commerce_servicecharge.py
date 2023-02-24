from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_commerce_servicechargetype_enum as shared_codat_datacontracts_datasets_commerce_servicechargetype_enum
from ..shared import codat_datacontracts_datasets_commerce_taxcomponentallocation as shared_codat_datacontracts_datasets_commerce_taxcomponentallocation
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataContractsDatasetsCommerceServiceCharge:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description'), 'exclude': lambda f: f is None }})
    quantity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity'), 'exclude': lambda f: f is None }})
    tax_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxAmount'), 'exclude': lambda f: f is None }})
    taxes: Optional[list[shared_codat_datacontracts_datasets_commerce_taxcomponentallocation.CodatDataContractsDatasetsCommerceTaxComponentAllocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxes'), 'exclude': lambda f: f is None }})
    tax_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxPercentage'), 'exclude': lambda f: f is None }})
    total_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalAmount'), 'exclude': lambda f: f is None }})
    type: Optional[shared_codat_datacontracts_datasets_commerce_servicechargetype_enum.CodatDataContractsDatasetsCommerceServiceChargeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type'), 'exclude': lambda f: f is None }})
    