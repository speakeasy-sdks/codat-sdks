import dataclasses
from ..shared import codat_dataintegrity_contracts_details_transactiondetailspagedresponse as shared_codat_dataintegrity_contracts_details_transactiondetailspagedresponse
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetailsPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    data_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'dataType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetailsQueryParams:
    order_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetailsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetailsRequest:
    path_params: GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetailsPathParams = dataclasses.field()
    query_params: GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetailsQueryParams = dataclasses.field()
    security: GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetailsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_integrity_contracts_details_transaction_details_paged_response: Optional[shared_codat_dataintegrity_contracts_details_transactiondetailspagedresponse.CodatDataIntegrityContractsDetailsTransactionDetailsPagedResponse] = dataclasses.field(default=None)
    