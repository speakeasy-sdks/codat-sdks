import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_public_api_models_company_dataconnection as shared_codat_public_api_models_company_dataconnection


@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsRequestBody:
    platform_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformKey') }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsRequest:
    path_params: PostCompaniesCompanyIDConnectionsPathParams = dataclasses.field()
    security: PostCompaniesCompanyIDConnectionsSecurity = dataclasses.field()
    request: Optional[PostCompaniesCompanyIDConnectionsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_company_data_connection: Optional[shared_codat_public_api_models_company_dataconnection.CodatPublicAPIModelsCompanyDataConnection] = dataclasses.field(default=None)
    
