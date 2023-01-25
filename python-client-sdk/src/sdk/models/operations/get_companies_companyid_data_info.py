import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_datacontracts_datasets_companydataset as shared_codat_datacontracts_datasets_companydataset


@dataclasses.dataclass
class GetCompaniesCompanyIDDataInfoPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataInfoSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataInfoRequest:
    path_params: GetCompaniesCompanyIDDataInfoPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataInfoSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_company_dataset: Optional[shared_codat_datacontracts_datasets_companydataset.CodatDataContractsDatasetsCompanyDataset] = dataclasses.field(default=None)
    
