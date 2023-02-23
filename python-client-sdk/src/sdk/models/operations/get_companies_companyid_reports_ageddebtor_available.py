import dataclasses
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDReportsAgedDebtorAvailablePathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDReportsAgedDebtorAvailableSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDReportsAgedDebtorAvailableRequest:
    path_params: GetCompaniesCompanyIDReportsAgedDebtorAvailablePathParams = dataclasses.field()
    security: GetCompaniesCompanyIDReportsAgedDebtorAvailableSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDReportsAgedDebtorAvailableResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_companies_company_id_reports_aged_debtor_available_200_application_json_boolean: Optional[bool] = dataclasses.field(default=None)
    