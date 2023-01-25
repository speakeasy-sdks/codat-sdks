import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_datacontracts_datasets_attachmentsdataset as shared_codat_datacontracts_datasets_attachmentsdataset


@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    supplier_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'supplierId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsRequest:
    path_params: GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsPathParams = dataclasses.field()
    security: GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_data_contracts_datasets_attachments_dataset: Optional[shared_codat_datacontracts_datasets_attachmentsdataset.CodatDataContractsDatasetsAttachmentsDataset] = dataclasses.field(default=None)
    
