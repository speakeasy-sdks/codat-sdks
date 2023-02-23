import dataclasses
from ..shared import codat_datacontracts_datasets_accountref as shared_codat_datacontracts_datasets_accountref
from ..shared import codat_datacontracts_datasets_taxrateref as shared_codat_datacontracts_datasets_taxrateref
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsInvoiceItem:
    account_ref: Optional[shared_codat_datacontracts_datasets_accountref.CodatDataContractsDatasetsAccountRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountRef') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    tax_rate_ref: Optional[shared_codat_datacontracts_datasets_taxrateref.CodatDataContractsDatasetsTaxRateRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxRateRef') }})
    unit_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitPrice') }})
    