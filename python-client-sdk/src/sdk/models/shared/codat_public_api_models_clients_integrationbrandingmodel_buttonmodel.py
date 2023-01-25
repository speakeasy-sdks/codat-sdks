import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_public_api_models_clients_integrationbrandingmodel_defaultmodel as shared_codat_public_api_models_clients_integrationbrandingmodel_defaultmodel
from ..shared import codat_public_api_models_clients_integrationbrandingmodel_hovermodel as shared_codat_public_api_models_clients_integrationbrandingmodel_hovermodel


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsClientsIntegrationBrandingModelButtonModel:
    default: Optional[shared_codat_public_api_models_clients_integrationbrandingmodel_defaultmodel.CodatPublicAPIModelsClientsIntegrationBrandingModelDefaultModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    hover: Optional[shared_codat_public_api_models_clients_integrationbrandingmodel_hovermodel.CodatPublicAPIModelsClientsIntegrationBrandingModelHoverModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hover') }})
    
