import dataclasses
from ..shared import codat_public_api_models_data_trackingcategory as shared_codat_public_api_models_data_trackingcategory
from ..shared import codat_public_api_models_data_trackingcategorypagedresponselinksmodel as shared_codat_public_api_models_data_trackingcategorypagedresponselinksmodel
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsDataTrackingCategoryPagedResponseModel:
    r"""CodatPublicAPIModelsDataTrackingCategoryPagedResponseModel
    Used to represent what can be returned by an endpoint that supports paging.
    Usable with the [ProducesResponseType] attribute on a controller action.
    """
    
    links: Optional[shared_codat_public_api_models_data_trackingcategorypagedresponselinksmodel.CodatPublicAPIModelsDataTrackingCategoryPagedResponseLinksModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    page_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    results: Optional[list[shared_codat_public_api_models_data_trackingcategory.CodatPublicAPIModelsDataTrackingCategory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    total_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults') }})
    