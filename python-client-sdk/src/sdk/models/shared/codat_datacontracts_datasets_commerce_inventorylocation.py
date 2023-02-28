from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_commerce_locationref as shared_codat_datacontracts_datasets_commerce_locationref
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataContractsDatasetsCommerceInventoryLocation:
    location_ref: Optional[shared_codat_datacontracts_datasets_commerce_locationref.CodatDataContractsDatasetsCommerceLocationRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationRef'), 'exclude': lambda f: f is None }})
    quantity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity'), 'exclude': lambda f: f is None }})
    