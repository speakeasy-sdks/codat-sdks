import dataclasses
from ..shared import codat_public_api_models_clients_integrationbrandingmodel_fullmodel as shared_codat_public_api_models_clients_integrationbrandingmodel_fullmodel
from ..shared import codat_public_api_models_clients_integrationbrandingmodel_squaremodel as shared_codat_public_api_models_clients_integrationbrandingmodel_squaremodel
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsClientsIntegrationBrandingModelLogoModel:
    full: Optional[shared_codat_public_api_models_clients_integrationbrandingmodel_fullmodel.CodatPublicAPIModelsClientsIntegrationBrandingModelFullModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('full') }})
    square: Optional[shared_codat_public_api_models_clients_integrationbrandingmodel_squaremodel.CodatPublicAPIModelsClientsIntegrationBrandingModelSquareModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('square') }})
    