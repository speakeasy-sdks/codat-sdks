import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_push_pushoption as shared_codat_datacontracts_push_pushoption


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsDataPushOptionsAggregate:
    post: Optional[shared_codat_datacontracts_push_pushoption.CodatDataContractsPushPushOption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post') }})
    put: Optional[shared_codat_datacontracts_push_pushoption.CodatDataContractsPushPushOption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('put') }})
    
