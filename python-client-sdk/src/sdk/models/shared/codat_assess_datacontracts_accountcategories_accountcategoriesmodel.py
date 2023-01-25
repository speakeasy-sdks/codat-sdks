import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_assess_datacontracts_accountcategories_accountrefmodel as shared_codat_assess_datacontracts_accountcategories_accountrefmodel
from ..shared import codat_assess_datacontracts_accountcategories_confirmedaccountcategorymodel as shared_codat_assess_datacontracts_accountcategories_confirmedaccountcategorymodel
from ..shared import codat_assess_datacontracts_accountcategories_suggestedaccountcategorymodel as shared_codat_assess_datacontracts_accountcategories_suggestedaccountcategorymodel


@dataclass_json
@dataclasses.dataclass
class CodatAssessDataContractsAccountCategoriesAccountCategoriesModel:
    account_ref: Optional[shared_codat_assess_datacontracts_accountcategories_accountrefmodel.CodatAssessDataContractsAccountCategoriesAccountRefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountRef') }})
    confirmed: Optional[shared_codat_assess_datacontracts_accountcategories_confirmedaccountcategorymodel.CodatAssessDataContractsAccountCategoriesConfirmedAccountCategoryModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmed') }})
    suggested: Optional[shared_codat_assess_datacontracts_accountcategories_suggestedaccountcategorymodel.CodatAssessDataContractsAccountCategoriesSuggestedAccountCategoryModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggested') }})
    
