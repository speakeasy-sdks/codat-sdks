from __future__ import annotations
import dataclasses
from ..shared import codat_public_api_models_clients_integrationbrandingmodel_fullmodel as shared_codat_public_api_models_clients_integrationbrandingmodel_fullmodel
from ..shared import codat_public_api_models_clients_integrationbrandingmodel_squaremodel as shared_codat_public_api_models_clients_integrationbrandingmodel_squaremodel
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatPublicAPIModelsClientsIntegrationBrandingModelLogoModel:
    full: Optional[shared_codat_public_api_models_clients_integrationbrandingmodel_fullmodel.CodatPublicAPIModelsClientsIntegrationBrandingModelFullModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('full'), 'exclude': lambda f: f is None }})
    square: Optional[shared_codat_public_api_models_clients_integrationbrandingmodel_squaremodel.CodatPublicAPIModelsClientsIntegrationBrandingModelSquareModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('square'), 'exclude': lambda f: f is None }})
    