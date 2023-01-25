import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_paymentmethodpagedresponselinksmodel as shared_codat_datacontracts_datasets_paymentmethodpagedresponselinksmodel
from ..shared import codat_datacontracts_datasets_paymentmethod as shared_codat_datacontracts_datasets_paymentmethod


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsPaymentMethodPagedResponseModel:
    r"""CodatDataContractsDatasetsPaymentMethodPagedResponseModel
    Used to represent what can be returned by an endpoint that supports paging.
    Usable with the [ProducesResponseType] attribute on a controller action.
    """
    
    links: Optional[shared_codat_datacontracts_datasets_paymentmethodpagedresponselinksmodel.CodatDataContractsDatasetsPaymentMethodPagedResponseLinksModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    page_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    results: Optional[list[shared_codat_datacontracts_datasets_paymentmethod.CodatDataContractsDatasetsPaymentMethod]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    total_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults') }})
    
