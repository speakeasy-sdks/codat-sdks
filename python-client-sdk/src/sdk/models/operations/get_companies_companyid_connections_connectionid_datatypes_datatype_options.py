import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_public_api_models_data_pushoptionsaggregate as shared_codat_public_api_models_data_pushoptionsaggregate


@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    data_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'dataType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsRequest:
    path_params: GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_data_push_options_aggregate: Optional[shared_codat_public_api_models_data_pushoptionsaggregate.CodatPublicAPIModelsDataPushOptionsAggregate] = dataclasses.field(default=None)
    
