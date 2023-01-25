import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_public_api_models_rules_notifiers as shared_codat_public_api_models_rules_notifiers


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsRulesRule:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    company_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyId') }})
    notifiers: Optional[shared_codat_public_api_models_rules_notifiers.CodatPublicAPIModelsRulesNotifiers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifiers') }})
    
