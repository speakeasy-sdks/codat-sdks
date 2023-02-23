import dataclasses
from ..shared import codat_datacontracts_push_pushoption as shared_codat_datacontracts_push_pushoption
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPOSTPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    data_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'dataType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPOSTSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPOSTRequest:
    path_params: GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPOSTPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPOSTSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPOSTResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_push_push_option: Optional[shared_codat_datacontracts_push_pushoption.CodatDataContractsPushPushOption] = dataclasses.field(default=None)
    