import dataclasses
from ..shared import codat_assess_datacontracts_cashflow_transactions_sourceref as shared_codat_assess_datacontracts_cashflow_transactions_sourceref
from ..shared import codat_assess_datacontracts_cashflow_transactions_transactioncategory as shared_codat_assess_datacontracts_cashflow_transactions_transactioncategory
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingTransaction:
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    date_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    source_ref: Optional[shared_codat_assess_datacontracts_cashflow_transactions_sourceref.CodatAssessDataContractsCashFlowTransactionsSourceRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceRef') }})
    transaction_category: Optional[shared_codat_assess_datacontracts_cashflow_transactions_transactioncategory.CodatAssessDataContractsCashFlowTransactionsTransactionCategory] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionCategory') }})
    