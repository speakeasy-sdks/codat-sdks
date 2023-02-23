import dataclasses
from ..shared import codat_datacontracts_datasets_recordref as shared_codat_datacontracts_datasets_recordref
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsAccountTransactionLine:
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    record_ref: Optional[shared_codat_datacontracts_datasets_recordref.CodatDataContractsDatasetsRecordRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordRef') }})
    