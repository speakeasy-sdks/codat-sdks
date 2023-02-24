from __future__ import annotations
import dataclasses
from ..shared import codat_pullmessages_contracts_fetchmessage as shared_codat_pullmessages_contracts_fetchmessage
from ..shared import codat_pullmessages_contracts_mapmessage as shared_codat_pullmessages_contracts_mapmessage
from ..shared import codat_pullmessages_contracts_validationmessage as shared_codat_pullmessages_contracts_validationmessage
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatPullMessagesContractsDatasetMessages:
    fetch: Optional[list[shared_codat_pullmessages_contracts_fetchmessage.CodatPullMessagesContractsFetchMessage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fetch'), 'exclude': lambda f: f is None }})
    map: Optional[list[shared_codat_pullmessages_contracts_mapmessage.CodatPullMessagesContractsMapMessage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('map'), 'exclude': lambda f: f is None }})
    validation: Optional[list[shared_codat_pullmessages_contracts_validationmessage.CodatPullMessagesContractsValidationMessage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation'), 'exclude': lambda f: f is None }})
    