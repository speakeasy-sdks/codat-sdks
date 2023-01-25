import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_responses_hallink as shared_codat_datacontracts_responses_hallink
from ..shared import codat_dataintegrity_contracts_details_transactiondetails as shared_codat_dataintegrity_contracts_details_transactiondetails


@dataclass_json
@dataclasses.dataclass
class CodatDataIntegrityContractsDetailsTransactionDetailsPagedResponse:
    page_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber') }})
    page_size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    total_results: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults') }})
    links: Optional[dict[str, shared_codat_datacontracts_responses_hallink.CodatDataContractsResponsesHalLink]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    results: Optional[list[shared_codat_dataintegrity_contracts_details_transactiondetails.CodatDataIntegrityContractsDetailsTransactionDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
