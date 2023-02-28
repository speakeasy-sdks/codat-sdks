from __future__ import annotations
import dataclasses
from ..shared import codat_dataintegrity_contracts_summary_matchamountsummary as shared_codat_dataintegrity_contracts_summary_matchamountsummary
from ..shared import codat_dataintegrity_contracts_summary_matchcountsummary as shared_codat_dataintegrity_contracts_summary_matchcountsummary
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataIntegrityContractsSummaryMatchSummary:
    by_amount: Optional[shared_codat_dataintegrity_contracts_summary_matchamountsummary.CodatDataIntegrityContractsSummaryMatchAmountSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('byAmount'), 'exclude': lambda f: f is None }})
    by_count: Optional[shared_codat_dataintegrity_contracts_summary_matchcountsummary.CodatDataIntegrityContractsSummaryMatchCountSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('byCount'), 'exclude': lambda f: f is None }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type'), 'exclude': lambda f: f is None }})
    