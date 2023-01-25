import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_public_api_models_data_trackingcategorypagedresponsehrefmodel as shared_codat_public_api_models_data_trackingcategorypagedresponsehrefmodel


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsDataTrackingCategoryPagedResponseLinksModel:
    current: Optional[shared_codat_public_api_models_data_trackingcategorypagedresponsehrefmodel.CodatPublicAPIModelsDataTrackingCategoryPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    next: Optional[shared_codat_public_api_models_data_trackingcategorypagedresponsehrefmodel.CodatPublicAPIModelsDataTrackingCategoryPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[shared_codat_public_api_models_data_trackingcategorypagedresponsehrefmodel.CodatPublicAPIModelsDataTrackingCategoryPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    self: Optional[shared_codat_public_api_models_data_trackingcategorypagedresponsehrefmodel.CodatPublicAPIModelsDataTrackingCategoryPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
