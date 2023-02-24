from __future__ import annotations
import dataclasses
from ..shared import codat_public_api_models_syncsettings_syncsettingmodel as shared_codat_public_api_models_syncsettings_syncsettingmodel
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatPublicAPIModelsClientsClientSyncSettingsModel:
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId'), 'exclude': lambda f: f is None }})
    overrides_defaults: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overridesDefaults'), 'exclude': lambda f: f is None }})
    settings: Optional[list[shared_codat_public_api_models_syncsettings_syncsettingmodel.CodatPublicAPIModelsSyncSettingsSyncSettingModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings'), 'exclude': lambda f: f is None }})
    