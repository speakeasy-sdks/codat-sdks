from __future__ import annotations
import dataclasses
from ..shared import codat_public_api_models_data_trackingcategorypagedresponsehrefmodel as shared_codat_public_api_models_data_trackingcategorypagedresponsehrefmodel
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatPublicAPIModelsDataTrackingCategoryPagedResponseLinksModel:
    current: Optional[shared_codat_public_api_models_data_trackingcategorypagedresponsehrefmodel.CodatPublicAPIModelsDataTrackingCategoryPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current'), 'exclude': lambda f: f is None }})
    next: Optional[shared_codat_public_api_models_data_trackingcategorypagedresponsehrefmodel.CodatPublicAPIModelsDataTrackingCategoryPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next'), 'exclude': lambda f: f is None }})
    previous: Optional[shared_codat_public_api_models_data_trackingcategorypagedresponsehrefmodel.CodatPublicAPIModelsDataTrackingCategoryPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous'), 'exclude': lambda f: f is None }})
    self: Optional[shared_codat_public_api_models_data_trackingcategorypagedresponsehrefmodel.CodatPublicAPIModelsDataTrackingCategoryPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self'), 'exclude': lambda f: f is None }})
    