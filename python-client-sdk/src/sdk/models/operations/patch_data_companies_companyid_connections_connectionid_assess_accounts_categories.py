from __future__ import annotations
import dataclasses
from ..shared import codat_assess_datacontracts_accountcategories_accountcategoriesmodel as shared_codat_assess_datacontracts_accountcategories_accountcategoriesmodel
from ..shared import codat_assess_datacontracts_accountcategories_patchaccountcategoriesmodel as shared_codat_assess_datacontracts_accountcategories_patchaccountcategoriesmodel
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategoriesPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategoriesSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategoriesRequest:
    path_params: PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategoriesPathParams = dataclasses.field()
    security: PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategoriesSecurity = dataclasses.field()
    request: Optional[shared_codat_assess_datacontracts_accountcategories_patchaccountcategoriesmodel.CodatAssessDataContractsAccountCategoriesPatchAccountCategoriesModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_assess_data_contracts_account_categories_account_categories_models: Optional[list[shared_codat_assess_datacontracts_accountcategories_accountcategoriesmodel.CodatAssessDataContractsAccountCategoriesAccountCategoriesModel]] = dataclasses.field(default=None)
    