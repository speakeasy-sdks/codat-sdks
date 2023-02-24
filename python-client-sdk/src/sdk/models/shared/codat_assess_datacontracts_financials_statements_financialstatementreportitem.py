from __future__ import annotations
import dataclasses
from ..shared import codat_assess_datacontracts_financials_statements_accountcategory as shared_codat_assess_datacontracts_financials_statements_accountcategory
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatAssessDataContractsFinancialsStatementsFinancialStatementReportItem:
    account_category: Optional[shared_codat_assess_datacontracts_financials_statements_accountcategory.CodatAssessDataContractsFinancialsStatementsAccountCategory] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountCategory'), 'exclude': lambda f: f is None }})
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId'), 'exclude': lambda f: f is None }})
    account_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName'), 'exclude': lambda f: f is None }})
    balance: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance'), 'exclude': lambda f: f is None }})
    date_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'exclude': lambda f: f is None }})
    