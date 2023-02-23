import dataclasses
from ..shared import codat_datacontracts_datasets_agedoutstandingamount as shared_codat_datacontracts_datasets_agedoutstandingamount
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsAgedCurrencyOutstanding:
    aged_outstanding_amounts: Optional[list[shared_codat_datacontracts_datasets_agedoutstandingamount.CodatDataContractsDatasetsAgedOutstandingAmount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agedOutstandingAmounts') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    