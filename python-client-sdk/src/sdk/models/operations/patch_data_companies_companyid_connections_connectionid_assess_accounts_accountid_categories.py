import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_assess_datacontracts_accountcategories_patchsingleaccountcategorymodel as shared_codat_assess_datacontracts_accountcategories_patchsingleaccountcategorymodel
from ..shared import codat_assess_datacontracts_accountcategories_accountcategoriesmodel as shared_codat_assess_datacontracts_accountcategories_accountcategoriesmodel


@dataclasses.dataclass
class PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesRequest:
    path_params: PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesPathParams = dataclasses.field()
    security: PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesSecurity = dataclasses.field()
    request: Optional[shared_codat_assess_datacontracts_accountcategories_patchsingleaccountcategorymodel.CodatAssessDataContractsAccountCategoriesPatchSingleAccountCategoryModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_assess_data_contracts_account_categories_account_categories_model: Optional[shared_codat_assess_datacontracts_accountcategories_accountcategoriesmodel.CodatAssessDataContractsAccountCategoriesAccountCategoriesModel] = dataclasses.field(default=None)
    
