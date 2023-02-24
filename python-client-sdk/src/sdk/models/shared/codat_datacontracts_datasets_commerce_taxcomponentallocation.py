from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_commerce_taxcomponentref as shared_codat_datacontracts_datasets_commerce_taxcomponentref
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataContractsDatasetsCommerceTaxComponentAllocation:
    tax_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxAmount'), 'exclude': lambda f: f is None }})
    tax_component_ref: Optional[shared_codat_datacontracts_datasets_commerce_taxcomponentref.CodatDataContractsDatasetsCommerceTaxComponentRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxComponentRef'), 'exclude': lambda f: f is None }})
    