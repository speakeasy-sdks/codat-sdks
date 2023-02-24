from __future__ import annotations
import dataclasses
from ..shared import codat_assess_datacontracts_financials_statements_accountcategorylevel as shared_codat_assess_datacontracts_financials_statements_accountcategorylevel
from ..shared import codat_assess_datacontracts_financials_statements_accountcategorystatus_enum as shared_codat_assess_datacontracts_financials_statements_accountcategorystatus_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatAssessDataContractsFinancialsStatementsAccountCategory:
    levels: Optional[list[shared_codat_assess_datacontracts_financials_statements_accountcategorylevel.CodatAssessDataContractsFinancialsStatementsAccountCategoryLevel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('levels'), 'exclude': lambda f: f is None }})
    status: Optional[shared_codat_assess_datacontracts_financials_statements_accountcategorystatus_enum.CodatAssessDataContractsFinancialsStatementsAccountCategoryStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status'), 'exclude': lambda f: f is None }})
    