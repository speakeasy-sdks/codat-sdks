from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_commerce_transactionreftype_enum as shared_codat_datacontracts_datasets_commerce_transactionreftype_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataContractsDatasetsCommerceTransactionSourceRef:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id'), 'exclude': lambda f: f is None }})
    type: Optional[shared_codat_datacontracts_datasets_commerce_transactionreftype_enum.CodatDataContractsDatasetsCommerceTransactionRefTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type'), 'exclude': lambda f: f is None }})
    