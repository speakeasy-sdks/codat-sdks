import dataclasses
from ..shared import codat_datacontracts_datasets_banking_account as shared_codat_datacontracts_datasets_banking_account
from ..shared import codat_datacontracts_datasets_banking_accountpagedresponselinksmodel as shared_codat_datacontracts_datasets_banking_accountpagedresponselinksmodel
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsBankingAccountPagedResponseModel:
    r"""CodatDataContractsDatasetsBankingAccountPagedResponseModel
    Used to represent what can be returned by an endpoint that supports paging.
    Usable with the [ProducesResponseType] attribute on a controller action.
    """
    
    links: Optional[shared_codat_datacontracts_datasets_banking_accountpagedresponselinksmodel.CodatDataContractsDatasetsBankingAccountPagedResponseLinksModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    page_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    results: Optional[list[shared_codat_datacontracts_datasets_banking_account.CodatDataContractsDatasetsBankingAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    total_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults') }})
    