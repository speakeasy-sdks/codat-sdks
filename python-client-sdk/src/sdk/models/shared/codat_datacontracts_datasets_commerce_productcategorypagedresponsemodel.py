import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_commerce_productcategorypagedresponselinksmodel as shared_codat_datacontracts_datasets_commerce_productcategorypagedresponselinksmodel
from ..shared import codat_datacontracts_datasets_commerce_productcategory as shared_codat_datacontracts_datasets_commerce_productcategory


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsCommerceProductCategoryPagedResponseModel:
    r"""CodatDataContractsDatasetsCommerceProductCategoryPagedResponseModel
    Used to represent what can be returned by an endpoint that supports paging.
    Usable with the [ProducesResponseType] attribute on a controller action.
    """
    
    links: Optional[shared_codat_datacontracts_datasets_commerce_productcategorypagedresponselinksmodel.CodatDataContractsDatasetsCommerceProductCategoryPagedResponseLinksModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    page_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    results: Optional[list[shared_codat_datacontracts_datasets_commerce_productcategory.CodatDataContractsDatasetsCommerceProductCategory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    total_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults') }})
    
