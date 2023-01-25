import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import codat_public_api_models_clients_bankingsettingsmodels_banksettingsdataset as shared_codat_public_api_models_clients_bankingsettingsmodels_banksettingsdataset


@dataclasses.dataclass
class GetIntegrationsBankSettingsSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetIntegrationsBankSettingsRequest:
    security: GetIntegrationsBankSettingsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetIntegrationsBankSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_public_api_models_clients_banking_settings_models_bank_settings_dataset: Optional[shared_codat_public_api_models_clients_bankingsettingsmodels_banksettingsdataset.CodatPublicAPIModelsClientsBankingSettingsModelsBankSettingsDataset] = dataclasses.field(default=None)
    
