import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_validation_validationitem as shared_codat_datacontracts_validation_validationitem


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsValidationValidationResult:
    errors: Optional[list[shared_codat_datacontracts_validation_validationitem.CodatDataContractsValidationValidationItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    warnings: Optional[list[shared_codat_datacontracts_validation_validationitem.CodatDataContractsValidationValidationItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
