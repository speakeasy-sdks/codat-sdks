import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import system_objectpushoperationpagedresponsehrefmodel as shared_system_objectpushoperationpagedresponsehrefmodel


@dataclass_json
@dataclasses.dataclass
class SystemObjectPushOperationPagedResponseLinksModel:
    current: Optional[shared_system_objectpushoperationpagedresponsehrefmodel.SystemObjectPushOperationPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    next: Optional[shared_system_objectpushoperationpagedresponsehrefmodel.SystemObjectPushOperationPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[shared_system_objectpushoperationpagedresponsehrefmodel.SystemObjectPushOperationPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    self: Optional[shared_system_objectpushoperationpagedresponsehrefmodel.SystemObjectPushOperationPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
