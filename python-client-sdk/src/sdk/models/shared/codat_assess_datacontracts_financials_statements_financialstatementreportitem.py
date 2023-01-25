import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_assess_datacontracts_financials_statements_accountcategory as shared_codat_assess_datacontracts_financials_statements_accountcategory


@dataclass_json
@dataclasses.dataclass
class CodatAssessDataContractsFinancialsStatementsFinancialStatementReportItem:
    account_category: Optional[shared_codat_assess_datacontracts_financials_statements_accountcategory.CodatAssessDataContractsFinancialsStatementsAccountCategory] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountCategory') }})
    account_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    balance: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    date_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    
