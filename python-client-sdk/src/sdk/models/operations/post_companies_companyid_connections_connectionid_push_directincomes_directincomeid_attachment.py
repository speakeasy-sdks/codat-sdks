import dataclasses
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesDirectIncomeIDAttachmentPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    direct_income_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'directIncomeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesDirectIncomeIDAttachmentSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesDirectIncomeIDAttachmentRequest:
    path_params: PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesDirectIncomeIDAttachmentPathParams = dataclasses.field()
    security: PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesDirectIncomeIDAttachmentSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesDirectIncomeIDAttachmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    