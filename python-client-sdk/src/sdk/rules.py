import requests
from . import utils
from sdk.models import operations, shared
from typing import Optional

class Rules:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def delete_rules_rule_id_(self, request: operations.DeleteRulesRuleIDRequest) -> operations.DeleteRulesRuleIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rules/{ruleId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRulesRuleIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_rules(self, request: operations.GetRulesRequest) -> operations.GetRulesResponse:
        r"""Fetch a list of rules
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rules"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsRulesRulePagedResponseModel])
                res.codat_public_api_models_rules_rule_paged_response_model = out

        return res

    
    def get_rules_alerts(self, request: operations.GetRulesAlertsRequest) -> operations.GetRulesAlertsResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rules/alerts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRulesAlertsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsRulesAlertModelPagedResponseModel])
                res.codat_public_api_models_rules_alert_model_paged_response_model = out

        return res

    
    def get_rules_alerts_alert_id_(self, request: operations.GetRulesAlertsAlertIDRequest) -> operations.GetRulesAlertsAlertIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rules/alerts/{alertId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRulesAlertsAlertIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsRulesAlertModel])
                res.codat_public_api_models_rules_alert_model = out

        return res

    
    def get_rules_rule_id_(self, request: operations.GetRulesRuleIDRequest) -> operations.GetRulesRuleIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rules/{ruleId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRulesRuleIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsRulesRule])
                res.codat_public_api_models_rules_rule = out

        return res

    
    def get_rules_rule_id_alerts(self, request: operations.GetRulesRuleIDAlertsRequest) -> operations.GetRulesRuleIDAlertsResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rules/{ruleId}/alerts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRulesRuleIDAlertsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsRulesAlertModelPagedResponseModel])
                res.codat_public_api_models_rules_alert_model_paged_response_model = out

        return res

    
    def post_rules(self, request: operations.PostRulesRequest) -> operations.PostRulesResponse:
        r"""Subscribe to a rule
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rules"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsRulesRule])
                res.codat_public_api_models_rules_rule = out

        return res

    
    def put_rules_rule_id_(self, request: operations.PutRulesRuleIDRequest) -> operations.PutRulesRuleIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rules/{ruleId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRulesRuleIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPublicAPIModelsRulesRule])
                res.codat_public_api_models_rules_rule = out

        return res

    