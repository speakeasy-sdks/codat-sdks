import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_public_api_models_rules_addrulemodel as shared_codat_public_api_models_rules_addrulemodel
from ..shared import codat_public_api_models_rules_rule as shared_codat_public_api_models_rules_rule


@dataclasses.dataclass
class PostRulesSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostRulesRequest:
    security: PostRulesSecurity = dataclasses.field()
    request: Optional[shared_codat_public_api_models_rules_addrulemodel.CodatPublicAPIModelsRulesAddRuleModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_rules_rule: Optional[shared_codat_public_api_models_rules_rule.CodatPublicAPIModelsRulesRule] = dataclasses.field(default=None)
    
