import dataclasses
from ..shared import codat_dataintegrity_contracts_summary_matchsummary as shared_codat_dataintegrity_contracts_summary_matchsummary
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatDataIntegrityContractsSummaryMatchSummariesResponse:
    summaries: Optional[list[shared_codat_dataintegrity_contracts_summary_matchsummary.CodatDataIntegrityContractsSummaryMatchSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summaries') }})
    