from __future__ import annotations
import dataclasses
from ..shared import codat_public_api_models_platformcredentials_dataprovidedby_enum as shared_codat_public_api_models_platformcredentials_dataprovidedby_enum
from ..shared import codat_public_api_models_platformcredentials_datatypefeatures as shared_codat_public_api_models_platformcredentials_datatypefeatures
from ..shared import codat_public_api_models_platformcredentials_integrationsupportedenvironments_enum as shared_codat_public_api_models_platformcredentials_integrationsupportedenvironments_enum
from ..shared import codat_public_api_models_platformcredentials_sourcetype_enum as shared_codat_public_api_models_platformcredentials_sourcetype_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatPublicAPIModelsPlatformCredentialsPlatformSourceModel:
    data_provided_by: Optional[shared_codat_public_api_models_platformcredentials_dataprovidedby_enum.CodatPublicAPIModelsPlatformCredentialsDataProvidedByEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataProvidedBy'), 'exclude': lambda f: f is None }})
    datatype_features: Optional[list[shared_codat_public_api_models_platformcredentials_datatypefeatures.CodatPublicAPIModelsPlatformCredentialsDatatypeFeatures]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datatypeFeatures'), 'exclude': lambda f: f is None }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled'), 'exclude': lambda f: f is None }})
    integration_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationId'), 'exclude': lambda f: f is None }})
    is_beta: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isBeta'), 'exclude': lambda f: f is None }})
    is_offline_connector: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isOfflineConnector'), 'exclude': lambda f: f is None }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key'), 'exclude': lambda f: f is None }})
    linked_connections_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedConnectionsCount'), 'exclude': lambda f: f is None }})
    logo_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logoUrl'), 'exclude': lambda f: f is None }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name'), 'exclude': lambda f: f is None }})
    source_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceId'), 'exclude': lambda f: f is None }})
    source_type: Optional[shared_codat_public_api_models_platformcredentials_sourcetype_enum.CodatPublicAPIModelsPlatformCredentialsSourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceType'), 'exclude': lambda f: f is None }})
    supported_environments: Optional[shared_codat_public_api_models_platformcredentials_integrationsupportedenvironments_enum.CodatPublicAPIModelsPlatformCredentialsIntegrationSupportedEnvironmentsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedEnvironments'), 'exclude': lambda f: f is None }})
    total_connections_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalConnectionsCount'), 'exclude': lambda f: f is None }})
    