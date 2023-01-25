import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_public_api_models_rules_rulepagedresponsehrefmodel as shared_codat_public_api_models_rules_rulepagedresponsehrefmodel


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsRulesRulePagedResponseLinksModel:
    current: Optional[shared_codat_public_api_models_rules_rulepagedresponsehrefmodel.CodatPublicAPIModelsRulesRulePagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    next: Optional[shared_codat_public_api_models_rules_rulepagedresponsehrefmodel.CodatPublicAPIModelsRulesRulePagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[shared_codat_public_api_models_rules_rulepagedresponsehrefmodel.CodatPublicAPIModelsRulesRulePagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    self: Optional[shared_codat_public_api_models_rules_rulepagedresponsehrefmodel.CodatPublicAPIModelsRulesRulePagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
