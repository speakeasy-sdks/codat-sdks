import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_phonetype_enum as shared_codat_datacontracts_datasets_phonetype_enum


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsPhone:
    type: shared_codat_datacontracts_datasets_phonetype_enum.CodatDataContractsDatasetsPhoneTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    
