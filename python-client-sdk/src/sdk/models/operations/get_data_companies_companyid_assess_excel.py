import dataclasses
from ..shared import codat_public_api_models_assess_assessexcelmeta as shared_codat_public_api_models_assess_assessexcelmeta
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetDataCompaniesCompanyIDAssessExcelPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDAssessExcelQueryParams:
    report_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'reportType', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDAssessExcelSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDAssessExcelRequest:
    path_params: GetDataCompaniesCompanyIDAssessExcelPathParams = dataclasses.field()
    query_params: GetDataCompaniesCompanyIDAssessExcelQueryParams = dataclasses.field()
    security: GetDataCompaniesCompanyIDAssessExcelSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDAssessExcelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_assess_assess_excel_meta: Optional[shared_codat_public_api_models_assess_assessexcelmeta.CodatPublicAPIModelsAssessAssessExcelMeta] = dataclasses.field(default=None)
    