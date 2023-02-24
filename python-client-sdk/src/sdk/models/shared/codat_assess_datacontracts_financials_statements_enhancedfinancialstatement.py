from __future__ import annotations
import dataclasses
from ..shared import codat_assess_datacontracts_financials_statements_financialstatementreportinfo as shared_codat_assess_datacontracts_financials_statements_financialstatementreportinfo
from ..shared import codat_assess_datacontracts_financials_statements_financialstatementreportitem as shared_codat_assess_datacontracts_financials_statements_financialstatementreportitem
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatAssessDataContractsFinancialsStatementsEnhancedFinancialStatement:
    report_info: Optional[shared_codat_assess_datacontracts_financials_statements_financialstatementreportinfo.CodatAssessDataContractsFinancialsStatementsFinancialStatementReportInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportInfo'), 'exclude': lambda f: f is None }})
    report_items: Optional[list[shared_codat_assess_datacontracts_financials_statements_financialstatementreportitem.CodatAssessDataContractsFinancialsStatementsFinancialStatementReportItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportItems'), 'exclude': lambda f: f is None }})
    