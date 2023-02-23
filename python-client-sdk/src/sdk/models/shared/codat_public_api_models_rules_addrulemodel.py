import dataclasses
from ..shared import codat_public_api_models_rules_notifiers as shared_codat_public_api_models_rules_notifiers
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsRulesAddRuleModel:
    company_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyId') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    notifiers: Optional[shared_codat_public_api_models_rules_notifiers.CodatPublicAPIModelsRulesNotifiers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifiers') }})
    