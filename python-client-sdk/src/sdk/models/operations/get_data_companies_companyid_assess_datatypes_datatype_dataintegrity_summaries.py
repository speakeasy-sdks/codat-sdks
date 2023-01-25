import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_dataintegrity_contracts_summary_matchsummariesresponse as shared_codat_dataintegrity_contracts_summary_matchsummariesresponse


@dataclasses.dataclass
class GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummariesPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    data_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'dataType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummariesQueryParams:
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummariesSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummariesRequest:
    path_params: GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummariesPathParams = dataclasses.field()
    query_params: GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummariesQueryParams = dataclasses.field()
    security: GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummariesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummariesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_integrity_contracts_summary_match_summaries_response: Optional[shared_codat_dataintegrity_contracts_summary_matchsummariesresponse.CodatDataIntegrityContractsSummaryMatchSummariesResponse] = dataclasses.field(default=None)
    
