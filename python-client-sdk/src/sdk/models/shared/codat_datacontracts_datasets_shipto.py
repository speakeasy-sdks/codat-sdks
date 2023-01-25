import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_address as shared_codat_datacontracts_datasets_address
from ..shared import codat_datacontracts_datasets_shiptocontact as shared_codat_datacontracts_datasets_shiptocontact


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsShipTo:
    address: Optional[shared_codat_datacontracts_datasets_address.CodatDataContractsDatasetsAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    contact: Optional[shared_codat_datacontracts_datasets_shiptocontact.CodatDataContractsDatasetsShipToContact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact') }})
    
