import dataclasses
from ..shared import codat_assess_datacontracts_accountcategories_confirmedaccountcategorymodel as shared_codat_assess_datacontracts_accountcategories_confirmedaccountcategorymodel
from ..shared import codat_assess_datacontracts_accountcategories_patchaccountrefmodel as shared_codat_assess_datacontracts_accountcategories_patchaccountrefmodel
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatAssessDataContractsAccountCategoriesPatchAccountCategoryModel:
    account_ref: Optional[shared_codat_assess_datacontracts_accountcategories_patchaccountrefmodel.CodatAssessDataContractsAccountCategoriesPatchAccountRefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountRef') }})
    confirmed: Optional[shared_codat_assess_datacontracts_accountcategories_confirmedaccountcategorymodel.CodatAssessDataContractsAccountCategoriesConfirmedAccountCategoryModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmed') }})
    