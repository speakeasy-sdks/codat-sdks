from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_bankstatementline as shared_codat_datacontracts_datasets_bankstatementline
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataContractsDatasetsBankTransactions:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId'), 'exclude': lambda f: f is None }})
    contract_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractVersion'), 'exclude': lambda f: f is None }})
    transactions: Optional[list[shared_codat_datacontracts_datasets_bankstatementline.CodatDataContractsDatasetsBankStatementLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions'), 'exclude': lambda f: f is None }})
    