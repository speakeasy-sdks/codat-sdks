from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_phonetype_enum as shared_codat_datacontracts_datasets_phonetype_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataContractsDatasetsPhone:
    type: shared_codat_datacontracts_datasets_phonetype_enum.CodatDataContractsDatasetsPhoneTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number'), 'exclude': lambda f: f is None }})
    