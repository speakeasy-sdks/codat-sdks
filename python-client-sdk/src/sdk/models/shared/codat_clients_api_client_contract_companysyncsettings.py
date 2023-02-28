from __future__ import annotations
import dataclasses
from ..shared import codat_clients_api_client_contract_syncsetting as shared_codat_clients_api_client_contract_syncsetting
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatClientsAPIClientContractCompanySyncSettings:
    company_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyId'), 'exclude': lambda f: f is None }})
    overrides_defaults: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overridesDefaults'), 'exclude': lambda f: f is None }})
    settings: Optional[list[shared_codat_clients_api_client_contract_syncsetting.CodatClientsAPIClientContractSyncSetting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings'), 'exclude': lambda f: f is None }})
    