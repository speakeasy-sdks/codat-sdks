from __future__ import annotations
import dataclasses
from ..shared import codat_public_api_models_clients_integrationbrandingmodel_buttonmodel as shared_codat_public_api_models_clients_integrationbrandingmodel_buttonmodel
from ..shared import codat_public_api_models_clients_integrationbrandingmodel_logomodel as shared_codat_public_api_models_clients_integrationbrandingmodel_logomodel
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatPublicAPIModelsClientsIntegrationBrandingModel:
    button: Optional[shared_codat_public_api_models_clients_integrationbrandingmodel_buttonmodel.CodatPublicAPIModelsClientsIntegrationBrandingModelButtonModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('button'), 'exclude': lambda f: f is None }})
    logo: Optional[shared_codat_public_api_models_clients_integrationbrandingmodel_logomodel.CodatPublicAPIModelsClientsIntegrationBrandingModelLogoModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo'), 'exclude': lambda f: f is None }})
    source_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceId'), 'exclude': lambda f: f is None }})
    