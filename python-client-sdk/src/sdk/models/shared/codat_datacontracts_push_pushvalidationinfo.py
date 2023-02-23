import dataclasses
from ..shared import codat_datacontracts_push_pushfieldvalidation as shared_codat_datacontracts_push_pushfieldvalidation
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsPushPushValidationInfo:
    information: Optional[list[shared_codat_datacontracts_push_pushfieldvalidation.CodatDataContractsPushPushFieldValidation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('information') }})
    warnings: Optional[list[shared_codat_datacontracts_push_pushfieldvalidation.CodatDataContractsPushPushFieldValidation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    