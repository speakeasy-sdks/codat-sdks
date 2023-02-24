from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_responses_hallink as shared_codat_datacontracts_responses_hallink
from ..shared import codat_dataintegrity_contracts_details_transactiondetails as shared_codat_dataintegrity_contracts_details_transactiondetails
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataIntegrityContractsDetailsTransactionDetailsPagedResponse:
    page_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber') }})
    page_size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    total_results: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults') }})
    links: Optional[dict[str, shared_codat_datacontracts_responses_hallink.CodatDataContractsResponsesHalLink]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links'), 'exclude': lambda f: f is None }})
    results: Optional[list[shared_codat_dataintegrity_contracts_details_transactiondetails.CodatDataIntegrityContractsDetailsTransactionDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results'), 'exclude': lambda f: f is None }})
    