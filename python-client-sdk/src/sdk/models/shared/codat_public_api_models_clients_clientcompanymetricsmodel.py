from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatPublicAPIModelsClientsClientCompanyMetricsModel:
    all_time_linked: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allTimeLinked'), 'exclude': lambda f: f is None }})
    currently_linked: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentlyLinked'), 'exclude': lambda f: f is None }})
    no_longer_linked: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noLongerLinked'), 'exclude': lambda f: f is None }})
    not_yet_linked: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notYetLinked'), 'exclude': lambda f: f is None }})
    