from __future__ import annotations
import dataclasses
from ..shared import codat_public_api_models_clients_clientcompanymetricsmodel as shared_codat_public_api_models_clients_clientcompanymetricsmodel
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetMetricsCompaniesSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetMetricsCompaniesRequest:
    security: GetMetricsCompaniesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMetricsCompaniesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_clients_client_company_metrics_model: Optional[shared_codat_public_api_models_clients_clientcompanymetricsmodel.CodatPublicAPIModelsClientsClientCompanyMetricsModel] = dataclasses.field(default=None)
    