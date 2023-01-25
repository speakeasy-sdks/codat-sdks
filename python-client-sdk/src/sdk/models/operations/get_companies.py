import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_public_api_models_company_companypagedresponsemodel as shared_codat_public_api_models_company_companypagedresponsemodel


@dataclasses.dataclass
class GetCompaniesQueryParams:
    page: int = dataclasses.field(metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCompaniesSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesRequest:
    query_params: GetCompaniesQueryParams = dataclasses.field()
    security: GetCompaniesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_company_company_paged_response_model: Optional[shared_codat_public_api_models_company_companypagedresponsemodel.CodatPublicAPIModelsCompanyCompanyPagedResponseModel] = dataclasses.field(default=None)
    
