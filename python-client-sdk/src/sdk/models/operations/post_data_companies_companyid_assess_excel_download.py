import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class PostDataCompaniesCompanyIDAssessExcelDownloadPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostDataCompaniesCompanyIDAssessExcelDownloadQueryParams:
    report_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'reportType', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostDataCompaniesCompanyIDAssessExcelDownloadSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostDataCompaniesCompanyIDAssessExcelDownloadRequest:
    path_params: PostDataCompaniesCompanyIDAssessExcelDownloadPathParams = dataclasses.field()
    query_params: PostDataCompaniesCompanyIDAssessExcelDownloadQueryParams = dataclasses.field()
    security: PostDataCompaniesCompanyIDAssessExcelDownloadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostDataCompaniesCompanyIDAssessExcelDownloadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_data_companies_company_id_assess_excel_download_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
