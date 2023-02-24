from __future__ import annotations
import dataclasses
from ..shared import codat_public_api_models_clients_integrationbrandingmodel_defaultmodel as shared_codat_public_api_models_clients_integrationbrandingmodel_defaultmodel
from ..shared import codat_public_api_models_clients_integrationbrandingmodel_hovermodel as shared_codat_public_api_models_clients_integrationbrandingmodel_hovermodel
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatPublicAPIModelsClientsIntegrationBrandingModelButtonModel:
    default: Optional[shared_codat_public_api_models_clients_integrationbrandingmodel_defaultmodel.CodatPublicAPIModelsClientsIntegrationBrandingModelDefaultModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default'), 'exclude': lambda f: f is None }})
    hover: Optional[shared_codat_public_api_models_clients_integrationbrandingmodel_hovermodel.CodatPublicAPIModelsClientsIntegrationBrandingModelHoverModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hover'), 'exclude': lambda f: f is None }})
    