import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteCompaniesCompanyIDConnectionsConnectionIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCompaniesCompanyIDConnectionsConnectionIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteCompaniesCompanyIDConnectionsConnectionIDRequest:
    path_params: DeleteCompaniesCompanyIDConnectionsConnectionIDPathParams = dataclasses.field()
    security: DeleteCompaniesCompanyIDConnectionsConnectionIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteCompaniesCompanyIDConnectionsConnectionIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_companies_company_id_connections_connection_id_200_application_json_boolean: Optional[bool] = dataclasses.field(default=None)
    
