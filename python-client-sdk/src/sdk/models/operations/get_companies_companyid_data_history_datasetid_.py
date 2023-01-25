import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_public_api_models_data_dataset as shared_codat_public_api_models_data_dataset


@dataclasses.dataclass
class GetCompaniesCompanyIDDataHistoryDatasetIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    dataset_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataHistoryDatasetIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataHistoryDatasetIDRequest:
    path_params: GetCompaniesCompanyIDDataHistoryDatasetIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataHistoryDatasetIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataHistoryDatasetIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_data_data_set: Optional[shared_codat_public_api_models_data_dataset.CodatPublicAPIModelsDataDataSet] = dataclasses.field(default=None)
    
