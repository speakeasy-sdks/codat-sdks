import dataclasses
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDDownloadPathParams:
    attachment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'attachmentId', 'style': 'simple', 'explode': False }})
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    supplier_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'supplierId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDDownloadSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDDownloadRequest:
    path_params: GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDDownloadPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDDownloadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDDownloadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    