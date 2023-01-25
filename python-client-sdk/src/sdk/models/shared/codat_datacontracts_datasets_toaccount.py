import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_recordref as shared_codat_datacontracts_datasets_recordref


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsToAccount:
    account_ref: Optional[shared_codat_datacontracts_datasets_recordref.CodatDataContractsDatasetsRecordRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountRef') }})
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    
