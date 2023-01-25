import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_assess_datacontracts_accountcategories_accountcategoriesmodelpagedresponsehrefmodel as shared_codat_assess_datacontracts_accountcategories_accountcategoriesmodelpagedresponsehrefmodel


@dataclass_json
@dataclasses.dataclass
class CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseLinksModel:
    current: Optional[shared_codat_assess_datacontracts_accountcategories_accountcategoriesmodelpagedresponsehrefmodel.CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    next: Optional[shared_codat_assess_datacontracts_accountcategories_accountcategoriesmodelpagedresponsehrefmodel.CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[shared_codat_assess_datacontracts_accountcategories_accountcategoriesmodelpagedresponsehrefmodel.CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    self: Optional[shared_codat_assess_datacontracts_accountcategories_accountcategoriesmodelpagedresponsehrefmodel.CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
