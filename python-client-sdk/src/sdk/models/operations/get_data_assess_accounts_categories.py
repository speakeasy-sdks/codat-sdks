import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_assess_datacontracts_accountcategories_accountcategory as shared_codat_assess_datacontracts_accountcategories_accountcategory


@dataclasses.dataclass
class GetDataAssessAccountsCategoriesSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetDataAssessAccountsCategoriesRequest:
    security: GetDataAssessAccountsCategoriesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetDataAssessAccountsCategoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_assess_data_contracts_account_categories_account_categories: Optional[list[shared_codat_assess_datacontracts_accountcategories_accountcategory.CodatAssessDataContractsAccountCategoriesAccountCategory]] = dataclasses.field(default=None)
    
