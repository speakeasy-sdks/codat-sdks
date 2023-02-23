import dataclasses
from ..shared import codat_public_api_models_syncsettings_syncsettingmodel as shared_codat_public_api_models_syncsettings_syncsettingmodel
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsClientsClientSyncSettingsModel:
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    overrides_defaults: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overridesDefaults') }})
    settings: Optional[list[shared_codat_public_api_models_syncsettings_syncsettingmodel.CodatPublicAPIModelsSyncSettingsSyncSettingModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    