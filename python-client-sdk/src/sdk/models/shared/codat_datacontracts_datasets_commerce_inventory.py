import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_commerce_inventorylocation as shared_codat_datacontracts_datasets_commerce_inventorylocation


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsCommerceInventory:
    locations: Optional[list[shared_codat_datacontracts_datasets_commerce_inventorylocation.CodatDataContractsDatasetsCommerceInventoryLocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    total_quantity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalQuantity') }})
    
