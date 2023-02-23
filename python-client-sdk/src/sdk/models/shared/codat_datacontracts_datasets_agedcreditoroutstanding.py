import dataclasses
from ..shared import codat_datacontracts_datasets_agedcurrencyoutstanding as shared_codat_datacontracts_datasets_agedcurrencyoutstanding
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsAgedCreditorOutstanding:
    aged_currency_outstanding: Optional[list[shared_codat_datacontracts_datasets_agedcurrencyoutstanding.CodatDataContractsDatasetsAgedCurrencyOutstanding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agedCurrencyOutstanding') }})
    supplier_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supplierId') }})
    supplier_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supplierName') }})
    