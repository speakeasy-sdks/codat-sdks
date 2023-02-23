import dataclasses
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDAttachmentsAttachmentIDDownloadPathParams:
    attachment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'attachmentId', 'style': 'simple', 'explode': False }})
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    direct_income_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'directIncomeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDAttachmentsAttachmentIDDownloadSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDAttachmentsAttachmentIDDownloadRequest:
    path_params: GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDAttachmentsAttachmentIDDownloadPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDAttachmentsAttachmentIDDownloadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDAttachmentsAttachmentIDDownloadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    