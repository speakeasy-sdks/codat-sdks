from __future__ import annotations
import dataclasses
from ..shared import codat_public_api_models_clients_bankingsettingsmodels_bankintegration as shared_codat_public_api_models_clients_bankingsettingsmodels_bankintegration
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatPublicAPIModelsClientsBankingSettingsModelsBankSetting:
    bank_integrations: Optional[list[shared_codat_public_api_models_clients_bankingsettingsmodels_bankintegration.CodatPublicAPIModelsClientsBankingSettingsModelsBankIntegration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bankIntegrations'), 'exclude': lambda f: f is None }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name'), 'exclude': lambda f: f is None }})
    source_guid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceGuid'), 'exclude': lambda f: f is None }})
    