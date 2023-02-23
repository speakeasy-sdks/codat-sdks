import dataclasses
from ..shared import codat_public_api_models_rules_rule as shared_codat_public_api_models_rules_rule
from ..shared import codat_public_api_models_rules_rulepagedresponselinksmodel as shared_codat_public_api_models_rules_rulepagedresponselinksmodel
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsRulesRulePagedResponseModel:
    r"""CodatPublicAPIModelsRulesRulePagedResponseModel
    Used to represent what can be returned by an endpoint that supports paging.
    Usable with the [ProducesResponseType] attribute on a controller action.
    """
    
    links: Optional[shared_codat_public_api_models_rules_rulepagedresponselinksmodel.CodatPublicAPIModelsRulesRulePagedResponseLinksModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    page_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    results: Optional[list[shared_codat_public_api_models_rules_rule.CodatPublicAPIModelsRulesRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    total_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults') }})
    