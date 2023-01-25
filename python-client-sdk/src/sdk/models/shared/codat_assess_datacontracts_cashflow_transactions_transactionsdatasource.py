import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_assess_datacontracts_cashflow_transactions_cashflowreportbankingtransaction as shared_codat_assess_datacontracts_cashflow_transactions_cashflowreportbankingtransaction


@dataclass_json
@dataclasses.dataclass
class CodatAssessDataContractsCashFlowTransactionsTransactionsDataSource:
    transactions: Optional[list[shared_codat_assess_datacontracts_cashflow_transactions_cashflowreportbankingtransaction.CodatAssessDataContractsCashFlowTransactionsCashFlowReportBankingTransaction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    
