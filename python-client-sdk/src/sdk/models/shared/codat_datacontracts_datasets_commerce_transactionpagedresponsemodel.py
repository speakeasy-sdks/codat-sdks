from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_commerce_transaction as shared_codat_datacontracts_datasets_commerce_transaction
from ..shared import codat_datacontracts_datasets_commerce_transactionpagedresponselinksmodel as shared_codat_datacontracts_datasets_commerce_transactionpagedresponselinksmodel
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataContractsDatasetsCommerceTransactionPagedResponseModel:
    r"""CodatDataContractsDatasetsCommerceTransactionPagedResponseModel
    Used to represent what can be returned by an endpoint that supports paging.
    Usable with the [ProducesResponseType] attribute on a controller action.
    """
    
    links: Optional[shared_codat_datacontracts_datasets_commerce_transactionpagedresponselinksmodel.CodatDataContractsDatasetsCommerceTransactionPagedResponseLinksModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links'), 'exclude': lambda f: f is None }})
    page_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber'), 'exclude': lambda f: f is None }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize'), 'exclude': lambda f: f is None }})
    results: Optional[list[shared_codat_datacontracts_datasets_commerce_transaction.CodatDataContractsDatasetsCommerceTransaction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results'), 'exclude': lambda f: f is None }})
    total_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults'), 'exclude': lambda f: f is None }})
    