import dataclasses
from ..shared import codat_assess_datacontracts_accountcategories_patchaccountcategorymodel as shared_codat_assess_datacontracts_accountcategories_patchaccountcategorymodel
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatAssessDataContractsAccountCategoriesPatchAccountCategoriesModel:
    categories: Optional[list[shared_codat_assess_datacontracts_accountcategories_patchaccountcategorymodel.CodatAssessDataContractsAccountCategoriesPatchAccountCategoryModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    