import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_dataintegrity_contracts_summary_matchamountsummary as shared_codat_dataintegrity_contracts_summary_matchamountsummary
from ..shared import codat_dataintegrity_contracts_summary_matchcountsummary as shared_codat_dataintegrity_contracts_summary_matchcountsummary


@dataclass_json
@dataclasses.dataclass
class CodatDataIntegrityContractsSummaryMatchSummary:
    by_amount: Optional[shared_codat_dataintegrity_contracts_summary_matchamountsummary.CodatDataIntegrityContractsSummaryMatchAmountSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('byAmount') }})
    by_count: Optional[shared_codat_dataintegrity_contracts_summary_matchcountsummary.CodatDataIntegrityContractsSummaryMatchCountSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('byCount') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
