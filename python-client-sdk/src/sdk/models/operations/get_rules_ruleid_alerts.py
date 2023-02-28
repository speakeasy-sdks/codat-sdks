from __future__ import annotations
import dataclasses
from ..shared import codat_public_api_models_rules_alertmodelpagedresponsemodel as shared_codat_public_api_models_rules_alertmodelpagedresponsemodel
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetRulesRuleIDAlertsPathParams:
    rule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ruleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRulesRuleIDAlertsQueryParams:
    page: int = dataclasses.field(metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRulesRuleIDAlertsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetRulesRuleIDAlertsRequest:
    path_params: GetRulesRuleIDAlertsPathParams = dataclasses.field()
    query_params: GetRulesRuleIDAlertsQueryParams = dataclasses.field()
    security: GetRulesRuleIDAlertsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRulesRuleIDAlertsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_rules_alert_model_paged_response_model: Optional[shared_codat_public_api_models_rules_alertmodelpagedresponsemodel.CodatPublicAPIModelsRulesAlertModelPagedResponseModel] = dataclasses.field(default=None)
    