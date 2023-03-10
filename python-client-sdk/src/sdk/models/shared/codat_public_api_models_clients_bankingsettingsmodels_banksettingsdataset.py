import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_public_api_models_clients_bankingsettingsmodels_banksetting as shared_codat_public_api_models_clients_bankingsettingsmodels_banksetting


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsClientsBankingSettingsModelsBankSettingsDataset:
    bank_settings: Optional[list[shared_codat_public_api_models_clients_bankingsettingsmodels_banksetting.CodatPublicAPIModelsClientsBankingSettingsModelsBankSetting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bankSettings') }})
    
