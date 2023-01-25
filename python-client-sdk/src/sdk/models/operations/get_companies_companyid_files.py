import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_public_api_models_filemetadatamodel as shared_codat_public_api_models_filemetadatamodel


@dataclasses.dataclass
class GetCompaniesCompanyIDFilesPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDFilesSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDFilesRequest:
    path_params: GetCompaniesCompanyIDFilesPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDFilesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDFilesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_file_metadata_models: Optional[list[shared_codat_public_api_models_filemetadatamodel.CodatPublicAPIModelsFileMetadataModel]] = dataclasses.field(default=None)
    
