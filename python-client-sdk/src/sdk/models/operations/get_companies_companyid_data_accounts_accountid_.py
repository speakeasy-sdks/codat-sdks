from __future__ import annotations
import dataclasses
from ..shared import codat_public_api_models_data_accountresponse as shared_codat_public_api_models_data_accountresponse
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDDataAccountsAccountIDPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataAccountsAccountIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataAccountsAccountIDRequest:
    path_params: GetCompaniesCompanyIDDataAccountsAccountIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataAccountsAccountIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataAccountsAccountIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_data_account_response: Optional[shared_codat_public_api_models_data_accountresponse.CodatPublicAPIModelsDataAccountResponse] = dataclasses.field(default=None)
    