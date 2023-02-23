import dataclasses
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class DeleteRulesRuleIDPathParams:
    rule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ruleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRulesRuleIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteRulesRuleIDRequest:
    path_params: DeleteRulesRuleIDPathParams = dataclasses.field()
    security: DeleteRulesRuleIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteRulesRuleIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    