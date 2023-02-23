import dataclasses
from ..shared import codat_assess_datacontracts_cashflow_transactions_sourcetype_enum as shared_codat_assess_datacontracts_cashflow_transactions_sourcetype_enum
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatAssessDataContractsCashFlowTransactionsSourceRef:
    source_type: Optional[shared_codat_assess_datacontracts_cashflow_transactions_sourcetype_enum.CodatAssessDataContractsCashFlowTransactionsSourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceType') }})
    