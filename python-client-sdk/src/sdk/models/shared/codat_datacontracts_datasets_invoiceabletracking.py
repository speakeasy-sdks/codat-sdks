import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_recordref as shared_codat_datacontracts_datasets_recordref


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsInvoiceableTracking:
    record_refs: list[shared_codat_datacontracts_datasets_recordref.CodatDataContractsDatasetsRecordRef] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordRefs') }})
    invoice_to: Optional[shared_codat_datacontracts_datasets_recordref.CodatDataContractsDatasetsRecordRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceTo') }})
    
