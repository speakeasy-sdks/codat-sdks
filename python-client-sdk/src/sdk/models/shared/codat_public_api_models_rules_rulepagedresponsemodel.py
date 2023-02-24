from __future__ import annotations
import dataclasses
from ..shared import codat_public_api_models_rules_rule as shared_codat_public_api_models_rules_rule
from ..shared import codat_public_api_models_rules_rulepagedresponselinksmodel as shared_codat_public_api_models_rules_rulepagedresponselinksmodel
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatPublicAPIModelsRulesRulePagedResponseModel:
    r"""CodatPublicAPIModelsRulesRulePagedResponseModel
    Used to represent what can be returned by an endpoint that supports paging.
    Usable with the [ProducesResponseType] attribute on a controller action.
    """
    
    links: Optional[shared_codat_public_api_models_rules_rulepagedresponselinksmodel.CodatPublicAPIModelsRulesRulePagedResponseLinksModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links'), 'exclude': lambda f: f is None }})
    page_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber'), 'exclude': lambda f: f is None }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize'), 'exclude': lambda f: f is None }})
    results: Optional[list[shared_codat_public_api_models_rules_rule.CodatPublicAPIModelsRulesRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results'), 'exclude': lambda f: f is None }})
    total_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults'), 'exclude': lambda f: f is None }})
    