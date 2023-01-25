import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_assess_datacontracts_financials_statements_accountcategorylevel as shared_codat_assess_datacontracts_financials_statements_accountcategorylevel
from ..shared import codat_assess_datacontracts_financials_statements_accountcategorystatus_enum as shared_codat_assess_datacontracts_financials_statements_accountcategorystatus_enum


@dataclass_json
@dataclasses.dataclass
class CodatAssessDataContractsFinancialsStatementsAccountCategory:
    levels: Optional[list[shared_codat_assess_datacontracts_financials_statements_accountcategorylevel.CodatAssessDataContractsFinancialsStatementsAccountCategoryLevel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('levels') }})
    status: Optional[shared_codat_assess_datacontracts_financials_statements_accountcategorystatus_enum.CodatAssessDataContractsFinancialsStatementsAccountCategoryStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
