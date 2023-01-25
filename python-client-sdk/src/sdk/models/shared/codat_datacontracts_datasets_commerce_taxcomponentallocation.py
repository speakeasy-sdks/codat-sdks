import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_commerce_taxcomponentref as shared_codat_datacontracts_datasets_commerce_taxcomponentref


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsCommerceTaxComponentAllocation:
    tax_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxAmount') }})
    tax_component_ref: Optional[shared_codat_datacontracts_datasets_commerce_taxcomponentref.CodatDataContractsDatasetsCommerceTaxComponentRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxComponentRef') }})
    
