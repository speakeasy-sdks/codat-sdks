from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_taxrate as shared_codat_datacontracts_datasets_taxrate
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDDataTaxRatesTaxRateIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    tax_rate_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'taxRateId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataTaxRatesTaxRateIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataTaxRatesTaxRateIDRequest:
    path_params: GetCompaniesCompanyIDDataTaxRatesTaxRateIDPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataTaxRatesTaxRateIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataTaxRatesTaxRateIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_tax_rate: Optional[shared_codat_datacontracts_datasets_taxrate.CodatDataContractsDatasetsTaxRate] = dataclasses.field(default=None)
    