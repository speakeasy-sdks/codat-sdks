import dataclasses
from ..shared import codat_datacontracts_datasets_directincome as shared_codat_datacontracts_datasets_directincome
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    direct_income_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'directIncomeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDRequest:
    path_params: GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_direct_income: Optional[shared_codat_datacontracts_datasets_directincome.CodatDataContractsDatasetsDirectIncome] = dataclasses.field(default=None)
    