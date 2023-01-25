import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsDirectCostIDAttachmentPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    direct_cost_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'directCostId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsDirectCostIDAttachmentSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsDirectCostIDAttachmentRequest:
    path_params: PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsDirectCostIDAttachmentPathParams = dataclasses.field()
    security: PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsDirectCostIDAttachmentSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsDirectCostIDAttachmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
