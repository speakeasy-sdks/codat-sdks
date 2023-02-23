import dataclasses
from ..shared import codat_clients_api_client_contract_syncsetting as shared_codat_clients_api_client_contract_syncsetting
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatClientsAPIClientContractCompanySyncSettings:
    company_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyId') }})
    overrides_defaults: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overridesDefaults') }})
    settings: Optional[list[shared_codat_clients_api_client_contract_syncsetting.CodatClientsAPIClientContractSyncSetting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    