import dataclasses
from ..shared import codat_public_api_models_rules_alertmodelpagedresponsehrefmodel as shared_codat_public_api_models_rules_alertmodelpagedresponsehrefmodel
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsRulesAlertModelPagedResponseLinksModel:
    current: Optional[shared_codat_public_api_models_rules_alertmodelpagedresponsehrefmodel.CodatPublicAPIModelsRulesAlertModelPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    next: Optional[shared_codat_public_api_models_rules_alertmodelpagedresponsehrefmodel.CodatPublicAPIModelsRulesAlertModelPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[shared_codat_public_api_models_rules_alertmodelpagedresponsehrefmodel.CodatPublicAPIModelsRulesAlertModelPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    self: Optional[shared_codat_public_api_models_rules_alertmodelpagedresponsehrefmodel.CodatPublicAPIModelsRulesAlertModelPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    