from __future__ import annotations
import dataclasses
from ..shared import codat_public_api_models_rules_alertmodel as shared_codat_public_api_models_rules_alertmodel
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetRulesAlertsAlertIDPathParams:
    alert_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'alertId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRulesAlertsAlertIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetRulesAlertsAlertIDRequest:
    path_params: GetRulesAlertsAlertIDPathParams = dataclasses.field()
    security: GetRulesAlertsAlertIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRulesAlertsAlertIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_rules_alert_model: Optional[shared_codat_public_api_models_rules_alertmodel.CodatPublicAPIModelsRulesAlertModel] = dataclasses.field(default=None)
    