import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_commerce_locationref as shared_codat_datacontracts_datasets_commerce_locationref


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsCommerceInventoryLocation:
    location_ref: Optional[shared_codat_datacontracts_datasets_commerce_locationref.CodatDataContractsDatasetsCommerceLocationRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationRef') }})
    quantity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    
