import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class DatasetLogs:
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

    
    def get_companies_company_id_data_dataset_logs_dataset_id_(self, request: operations.GetCompaniesCompanyIDDataDatasetLogsDatasetIDRequest) -> operations.GetCompaniesCompanyIDDataDatasetLogsDatasetIDResponse:
        r"""Gets dataset messages for a given dataset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/companies/{companyId}/data/datasetLogs/{datasetId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCompaniesCompanyIDDataDatasetLogsDatasetIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodatPullMessagesContractsDatasetMessages])
                res.codat_pull_messages_contracts_dataset_messages = out

        return res

    