from __future__ import annotations
import dataclasses
from ..shared import codat_assess_datacontracts_cashflow_transactions_cashflowreportbankingaccount as shared_codat_assess_datacontracts_cashflow_transactions_cashflowreportbankingaccount
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatAssessDataContractsCashFlowTransactionsAccountsDataSource:
    accounts: Optional[list[shared_codat_assess_datacontracts_cashflow_transactions_cashflowreportbankingaccount.CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts'), 'exclude': lambda f: f is None }})
    