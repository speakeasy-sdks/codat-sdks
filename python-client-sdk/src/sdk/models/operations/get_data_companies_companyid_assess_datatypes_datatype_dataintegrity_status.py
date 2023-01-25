import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_dataintegrity_contracts_metadata_matchmetadataresponse as shared_codat_dataintegrity_contracts_metadata_matchmetadataresponse


@dataclasses.dataclass
class GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityStatusPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    data_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'dataType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityStatusSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityStatusRequest:
    path_params: GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityStatusPathParams = dataclasses.field()
    security: GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityStatusSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_integrity_contracts_metadata_match_metadata_response: Optional[shared_codat_dataintegrity_contracts_metadata_matchmetadataresponse.CodatDataIntegrityContractsMetadataMatchMetadataResponse] = dataclasses.field(default=None)
    
