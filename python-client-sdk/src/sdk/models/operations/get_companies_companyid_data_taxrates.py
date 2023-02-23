import dataclasses
from ..shared import codat_datacontracts_datasets_taxratepagedresponsemodel as shared_codat_datacontracts_datasets_taxratepagedresponsemodel
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDDataTaxRatesPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataTaxRatesQueryParams:
    page: int = dataclasses.field(metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataTaxRatesSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataTaxRatesRequest:
    path_params: GetCompaniesCompanyIDDataTaxRatesPathParams = dataclasses.field()
    query_params: GetCompaniesCompanyIDDataTaxRatesQueryParams = dataclasses.field()
    security: GetCompaniesCompanyIDDataTaxRatesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDDataTaxRatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_tax_rate_paged_response_model: Optional[shared_codat_datacontracts_datasets_taxratepagedresponsemodel.CodatDataContractsDatasetsTaxRatePagedResponseModel] = dataclasses.field(default=None)
    