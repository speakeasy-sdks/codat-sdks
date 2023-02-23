import dataclasses
from ..shared import codat_public_api_models_rules_rule as shared_codat_public_api_models_rules_rule
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class PutRulesRuleIDPathParams:
    rule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ruleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutRulesRuleIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PutRulesRuleIDRequest:
    path_params: PutRulesRuleIDPathParams = dataclasses.field()
    security: PutRulesRuleIDSecurity = dataclasses.field()
    request: Optional[shared_codat_public_api_models_rules_rule.CodatPublicAPIModelsRulesRule] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutRulesRuleIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_rules_rule: Optional[shared_codat_public_api_models_rules_rule.CodatPublicAPIModelsRulesRule] = dataclasses.field(default=None)
    