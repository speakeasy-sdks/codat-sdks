from __future__ import annotations
import dataclasses
from ..shared import codat_assess_datacontracts_cashflow_transactions_sourceref as shared_codat_assess_datacontracts_cashflow_transactions_sourceref
from ..shared import codat_assess_datacontracts_cashflow_transactions_transactioncategory as shared_codat_assess_datacontracts_cashflow_transactions_transactioncategory
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingTransaction:
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount'), 'exclude': lambda f: f is None }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency'), 'exclude': lambda f: f is None }})
    date_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'exclude': lambda f: f is None }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description'), 'exclude': lambda f: f is None }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id'), 'exclude': lambda f: f is None }})
    source_ref: Optional[shared_codat_assess_datacontracts_cashflow_transactions_sourceref.CodatAssessDataContractsCashFlowTransactionsSourceRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceRef'), 'exclude': lambda f: f is None }})
    transaction_category: Optional[shared_codat_assess_datacontracts_cashflow_transactions_transactioncategory.CodatAssessDataContractsCashFlowTransactionsTransactionCategory] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionCategory'), 'exclude': lambda f: f is None }})
    