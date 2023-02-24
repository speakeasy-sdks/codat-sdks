from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_push_optiontype_enum as shared_codat_datacontracts_push_optiontype_enum
from ..shared import codat_datacontracts_push_pushoption as shared_codat_datacontracts_push_pushoption
from ..shared import codat_datacontracts_push_pushvalidationinfo as shared_codat_datacontracts_push_pushvalidationinfo
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataContractsPushPushOptionChoice:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    required: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    type: shared_codat_datacontracts_push_optiontype_enum.CodatDataContractsPushOptionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    options: Optional[list[CodatDataContractsPushPushOptionChoice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options'), 'exclude': lambda f: f is None }})
    properties: Optional[dict[str, shared_codat_datacontracts_push_pushoption.CodatDataContractsPushPushOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties'), 'exclude': lambda f: f is None }})
    rel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rel'), 'exclude': lambda f: f is None }})
    validation: Optional[shared_codat_datacontracts_push_pushvalidationinfo.CodatDataContractsPushPushValidationInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation'), 'exclude': lambda f: f is None }})
    