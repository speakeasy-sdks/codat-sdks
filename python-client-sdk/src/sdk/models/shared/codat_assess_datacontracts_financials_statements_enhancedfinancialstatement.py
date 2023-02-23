import dataclasses
from ..shared import codat_assess_datacontracts_financials_statements_financialstatementreportinfo as shared_codat_assess_datacontracts_financials_statements_financialstatementreportinfo
from ..shared import codat_assess_datacontracts_financials_statements_financialstatementreportitem as shared_codat_assess_datacontracts_financials_statements_financialstatementreportitem
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatAssessDataContractsFinancialsStatementsEnhancedFinancialStatement:
    report_info: Optional[shared_codat_assess_datacontracts_financials_statements_financialstatementreportinfo.CodatAssessDataContractsFinancialsStatementsFinancialStatementReportInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportInfo') }})
    report_items: Optional[list[shared_codat_assess_datacontracts_financials_statements_financialstatementreportitem.CodatAssessDataContractsFinancialsStatementsFinancialStatementReportItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportItems') }})
    