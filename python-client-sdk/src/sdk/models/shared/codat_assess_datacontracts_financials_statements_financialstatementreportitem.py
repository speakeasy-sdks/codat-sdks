import dataclasses
from ..shared import codat_assess_datacontracts_financials_statements_accountcategory as shared_codat_assess_datacontracts_financials_statements_accountcategory
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatAssessDataContractsFinancialsStatementsFinancialStatementReportItem:
    account_category: Optional[shared_codat_assess_datacontracts_financials_statements_accountcategory.CodatAssessDataContractsFinancialsStatementsAccountCategory] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountCategory') }})
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    account_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    balance: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    date_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    