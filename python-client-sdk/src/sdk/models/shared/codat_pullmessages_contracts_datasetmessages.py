import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_pullmessages_contracts_fetchmessage as shared_codat_pullmessages_contracts_fetchmessage
from ..shared import codat_pullmessages_contracts_mapmessage as shared_codat_pullmessages_contracts_mapmessage
from ..shared import codat_pullmessages_contracts_validationmessage as shared_codat_pullmessages_contracts_validationmessage


@dataclass_json
@dataclasses.dataclass
class CodatPullMessagesContractsDatasetMessages:
    fetch: Optional[list[shared_codat_pullmessages_contracts_fetchmessage.CodatPullMessagesContractsFetchMessage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fetch') }})
    map: Optional[list[shared_codat_pullmessages_contracts_mapmessage.CodatPullMessagesContractsMapMessage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('map') }})
    validation: Optional[list[shared_codat_pullmessages_contracts_validationmessage.CodatPullMessagesContractsValidationMessage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation') }})
    
