from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_push_pushoption as shared_codat_datacontracts_push_pushoption
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatPublicAPIModelsDataPushOptionsAggregate:
    post: Optional[shared_codat_datacontracts_push_pushoption.CodatDataContractsPushPushOption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post'), 'exclude': lambda f: f is None }})
    put: Optional[shared_codat_datacontracts_push_pushoption.CodatDataContractsPushPushOption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('put'), 'exclude': lambda f: f is None }})
    