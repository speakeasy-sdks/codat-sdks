import dataclasses
from ..shared import codat_assess_datacontracts_cashflow_transactions_accountsdatasource as shared_codat_assess_datacontracts_cashflow_transactions_accountsdatasource
from ..shared import codat_assess_datacontracts_cashflow_transactions_transactionsdatasource as shared_codat_assess_datacontracts_cashflow_transactions_transactionsdatasource
from ..shared import codat_assess_datacontracts_common_pagedreportinfo as shared_codat_assess_datacontracts_common_pagedreportinfo
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatAssessDataContractsCashFlowTransactionsCashFlowTransactionsReport:
    data_sources: Optional[list[shared_codat_assess_datacontracts_cashflow_transactions_accountsdatasource.CodatAssessDataContractsCashFlowTransactionsAccountsDataSource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSources') }})
    report_info: Optional[shared_codat_assess_datacontracts_common_pagedreportinfo.CodatAssessDataContractsCommonPagedReportInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportInfo') }})
    report_items: Optional[list[shared_codat_assess_datacontracts_cashflow_transactions_transactionsdatasource.CodatAssessDataContractsCashFlowTransactionsTransactionsDataSource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportItems') }})
    