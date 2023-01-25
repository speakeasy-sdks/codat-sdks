import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_assess_datacontracts_accountcategories_patchaccountcategorymodel as shared_codat_assess_datacontracts_accountcategories_patchaccountcategorymodel


@dataclass_json
@dataclasses.dataclass
class CodatAssessDataContractsAccountCategoriesPatchAccountCategoriesModel:
    categories: Optional[list[shared_codat_assess_datacontracts_accountcategories_patchaccountcategorymodel.CodatAssessDataContractsAccountCategoriesPatchAccountCategoryModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    
