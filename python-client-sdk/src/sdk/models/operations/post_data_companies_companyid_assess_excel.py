import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_public_api_models_assess_assessexcelmeta as shared_codat_public_api_models_assess_assessexcelmeta


@dataclasses.dataclass
class PostDataCompaniesCompanyIDAssessExcelPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostDataCompaniesCompanyIDAssessExcelQueryParams:
    report_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'reportType', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostDataCompaniesCompanyIDAssessExcelSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostDataCompaniesCompanyIDAssessExcelRequest:
    path_params: PostDataCompaniesCompanyIDAssessExcelPathParams = dataclasses.field()
    query_params: PostDataCompaniesCompanyIDAssessExcelQueryParams = dataclasses.field()
    security: PostDataCompaniesCompanyIDAssessExcelSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostDataCompaniesCompanyIDAssessExcelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_assess_assess_excel_meta: Optional[shared_codat_public_api_models_assess_assessexcelmeta.CodatPublicAPIModelsAssessAssessExcelMeta] = dataclasses.field(default=None)
    
