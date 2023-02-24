from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_commerce_inventorylocation as shared_codat_datacontracts_datasets_commerce_inventorylocation
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataContractsDatasetsCommerceInventory:
    locations: Optional[list[shared_codat_datacontracts_datasets_commerce_inventorylocation.CodatDataContractsDatasetsCommerceInventoryLocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations'), 'exclude': lambda f: f is None }})
    total_quantity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalQuantity'), 'exclude': lambda f: f is None }})
    