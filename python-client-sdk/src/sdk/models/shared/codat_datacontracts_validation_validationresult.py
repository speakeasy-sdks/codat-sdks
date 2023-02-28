from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_validation_validationitem as shared_codat_datacontracts_validation_validationitem
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataContractsValidationValidationResult:
    errors: Optional[list[shared_codat_datacontracts_validation_validationitem.CodatDataContractsValidationValidationItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors'), 'exclude': lambda f: f is None }})
    warnings: Optional[list[shared_codat_datacontracts_validation_validationitem.CodatDataContractsValidationValidationItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings'), 'exclude': lambda f: f is None }})
    