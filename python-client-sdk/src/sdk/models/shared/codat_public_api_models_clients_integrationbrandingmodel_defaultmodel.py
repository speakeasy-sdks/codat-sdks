import dataclasses
from ..shared import codat_public_api_models_clients_integrationbrandingmodel_imagemodel as shared_codat_public_api_models_clients_integrationbrandingmodel_imagemodel
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsClientsIntegrationBrandingModelDefaultModel:
    image: Optional[shared_codat_public_api_models_clients_integrationbrandingmodel_imagemodel.CodatPublicAPIModelsClientsIntegrationBrandingModelImageModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    