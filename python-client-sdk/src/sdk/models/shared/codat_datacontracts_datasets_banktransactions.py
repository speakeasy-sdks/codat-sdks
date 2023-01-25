import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_bankstatementline as shared_codat_datacontracts_datasets_bankstatementline


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsBankTransactions:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    contract_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractVersion') }})
    transactions: Optional[list[shared_codat_datacontracts_datasets_bankstatementline.CodatDataContractsDatasetsBankStatementLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    
