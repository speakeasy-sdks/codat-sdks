from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_agedoutstandingamount as shared_codat_datacontracts_datasets_agedoutstandingamount
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataContractsDatasetsAgedCurrencyOutstanding:
    aged_outstanding_amounts: Optional[list[shared_codat_datacontracts_datasets_agedoutstandingamount.CodatDataContractsDatasetsAgedOutstandingAmount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agedOutstandingAmounts'), 'exclude': lambda f: f is None }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency'), 'exclude': lambda f: f is None }})
    