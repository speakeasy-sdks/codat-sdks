import dataclasses
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataCustomersCustomerIDAttachmentsAttachmentIDDownloadPathParams:
    attachment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'attachmentId', 'style': 'simple', 'explode': False }})
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    customer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'customerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataCustomersCustomerIDAttachmentsAttachmentIDDownloadSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataCustomersCustomerIDAttachmentsAttachmentIDDownloadRequest:
    path_params: GetCompaniesCompanyIDConnectionsConnectionIDDataCustomersCustomerIDAttachmentsAttachmentIDDownloadPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDConnectionsConnectionIDDataCustomersCustomerIDAttachmentsAttachmentIDDownloadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataCustomersCustomerIDAttachmentsAttachmentIDDownloadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    