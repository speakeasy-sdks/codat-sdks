import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_invoicepagedresponsehrefmodel as shared_codat_datacontracts_datasets_invoicepagedresponsehrefmodel


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsInvoicePagedResponseLinksModel:
    current: Optional[shared_codat_datacontracts_datasets_invoicepagedresponsehrefmodel.CodatDataContractsDatasetsInvoicePagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    next: Optional[shared_codat_datacontracts_datasets_invoicepagedresponsehrefmodel.CodatDataContractsDatasetsInvoicePagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[shared_codat_datacontracts_datasets_invoicepagedresponsehrefmodel.CodatDataContractsDatasetsInvoicePagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    self: Optional[shared_codat_datacontracts_datasets_invoicepagedresponsehrefmodel.CodatDataContractsDatasetsInvoicePagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
