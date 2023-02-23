import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsRulesNotifiers:
    emails: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    webhook: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    