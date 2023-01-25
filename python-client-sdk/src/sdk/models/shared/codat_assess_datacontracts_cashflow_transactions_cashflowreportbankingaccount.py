import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_assess_datacontracts_cashflow_transactions_sourceref as shared_codat_assess_datacontracts_cashflow_transactions_sourceref


@dataclass_json
@dataclasses.dataclass
class CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingAccount:
    account_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    account_provider: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountProvider') }})
    account_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountType') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    current_balance: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentBalance') }})
    platform_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformName') }})
    source_ref: Optional[shared_codat_assess_datacontracts_cashflow_transactions_sourceref.CodatAssessDataContractsCashFlowTransactionsSourceRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceRef') }})
    
