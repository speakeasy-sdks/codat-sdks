from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_push_pushfieldvalidation as shared_codat_datacontracts_push_pushfieldvalidation
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataContractsPushPushValidationInfo:
    information: Optional[list[shared_codat_datacontracts_push_pushfieldvalidation.CodatDataContractsPushPushFieldValidation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('information'), 'exclude': lambda f: f is None }})
    warnings: Optional[list[shared_codat_datacontracts_push_pushfieldvalidation.CodatDataContractsPushPushFieldValidation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings'), 'exclude': lambda f: f is None }})
    