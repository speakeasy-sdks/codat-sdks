import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_public_api_models_clients_integrationbrandingmodel_imagemodel as shared_codat_public_api_models_clients_integrationbrandingmodel_imagemodel


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsClientsIntegrationBrandingModelDefaultModel:
    image: Optional[shared_codat_public_api_models_clients_integrationbrandingmodel_imagemodel.CodatPublicAPIModelsClientsIntegrationBrandingModelImageModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    
