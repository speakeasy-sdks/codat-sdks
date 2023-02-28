from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_push_pushchangetype_enum as shared_codat_datacontracts_push_pushchangetype_enum
from ..shared import codat_datacontracts_push_pushoperationrecordref as shared_codat_datacontracts_push_pushoperationrecordref
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataContractsPushPushOperationChange:
    attachment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachmentId'), 'exclude': lambda f: f is None }})
    record_ref: Optional[shared_codat_datacontracts_push_pushoperationrecordref.CodatDataContractsPushPushOperationRecordRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordRef'), 'exclude': lambda f: f is None }})
    type: Optional[shared_codat_datacontracts_push_pushchangetype_enum.CodatDataContractsPushPushChangeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type'), 'exclude': lambda f: f is None }})
    