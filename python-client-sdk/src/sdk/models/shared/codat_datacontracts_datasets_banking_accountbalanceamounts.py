import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsBankingAccountBalanceAmounts:
    current: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    available: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available') }})
    limit: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    
