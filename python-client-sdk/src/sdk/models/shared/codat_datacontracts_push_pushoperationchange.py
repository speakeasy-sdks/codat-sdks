import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_push_pushoperationrecordref as shared_codat_datacontracts_push_pushoperationrecordref
from ..shared import codat_datacontracts_push_pushchangetype_enum as shared_codat_datacontracts_push_pushchangetype_enum


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsPushPushOperationChange:
    record_ref: Optional[shared_codat_datacontracts_push_pushoperationrecordref.CodatDataContractsPushPushOperationRecordRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordRef') }})
    type: Optional[shared_codat_datacontracts_push_pushchangetype_enum.CodatDataContractsPushPushChangeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
