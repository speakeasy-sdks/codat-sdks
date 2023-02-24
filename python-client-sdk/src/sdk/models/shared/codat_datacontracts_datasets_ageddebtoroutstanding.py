from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_agedcurrencyoutstanding as shared_codat_datacontracts_datasets_agedcurrencyoutstanding
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataContractsDatasetsAgedDebtorOutstanding:
    aged_currency_outstanding: Optional[list[shared_codat_datacontracts_datasets_agedcurrencyoutstanding.CodatDataContractsDatasetsAgedCurrencyOutstanding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agedCurrencyOutstanding'), 'exclude': lambda f: f is None }})
    customer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId'), 'exclude': lambda f: f is None }})
    customer_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerName'), 'exclude': lambda f: f is None }})
    