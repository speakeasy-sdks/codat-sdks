import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_public_api_models_clients_bankingsettingsmodels_bankintegration as shared_codat_public_api_models_clients_bankingsettingsmodels_bankintegration


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsClientsBankingSettingsModelsBankSetting:
    bank_integrations: Optional[list[shared_codat_public_api_models_clients_bankingsettingsmodels_bankintegration.CodatPublicAPIModelsClientsBankingSettingsModelsBankIntegration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bankIntegrations') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_guid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceGuid') }})
    
