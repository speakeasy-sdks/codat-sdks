import dataclasses
from ..shared import codat_datacontracts_datasets_invoice as shared_codat_datacontracts_datasets_invoice
from ..shared import codat_datacontracts_datasets_invoicepushoperation as shared_codat_datacontracts_datasets_invoicepushoperation
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    invoice_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'invoiceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDQueryParams:
    force_update: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'forceUpdate', 'style': 'form', 'explode': True }})
    timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeoutInMinutes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDRequest:
    path_params: PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDPathParams = dataclasses.field()
    query_params: PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDQueryParams = dataclasses.field()
    security: PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDSecurity = dataclasses.field()
    request: Optional[shared_codat_datacontracts_datasets_invoice.CodatDataContractsDatasetsInvoice] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_invoice_push_operation: Optional[shared_codat_datacontracts_datasets_invoicepushoperation.CodatDataContractsDatasetsInvoicePushOperation] = dataclasses.field(default=None)
    