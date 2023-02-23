import dataclasses
from ..shared import codat_public_api_models_clients_integrationbrandingmodel_buttonmodel as shared_codat_public_api_models_clients_integrationbrandingmodel_buttonmodel
from ..shared import codat_public_api_models_clients_integrationbrandingmodel_logomodel as shared_codat_public_api_models_clients_integrationbrandingmodel_logomodel
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsClientsIntegrationBrandingModel:
    button: Optional[shared_codat_public_api_models_clients_integrationbrandingmodel_buttonmodel.CodatPublicAPIModelsClientsIntegrationBrandingModelButtonModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('button') }})
    logo: Optional[shared_codat_public_api_models_clients_integrationbrandingmodel_logomodel.CodatPublicAPIModelsClientsIntegrationBrandingModelLogoModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    source_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceId') }})
    