import dataclasses
from ..shared import codat_public_api_models_platformcredentials_dataprovidedby_enum as shared_codat_public_api_models_platformcredentials_dataprovidedby_enum
from ..shared import codat_public_api_models_platformcredentials_datatypefeatures as shared_codat_public_api_models_platformcredentials_datatypefeatures
from ..shared import codat_public_api_models_platformcredentials_integrationsupportedenvironments_enum as shared_codat_public_api_models_platformcredentials_integrationsupportedenvironments_enum
from ..shared import codat_public_api_models_platformcredentials_sourcetype_enum as shared_codat_public_api_models_platformcredentials_sourcetype_enum
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsPlatformCredentialsPlatformSourceModel:
    data_provided_by: Optional[shared_codat_public_api_models_platformcredentials_dataprovidedby_enum.CodatPublicAPIModelsPlatformCredentialsDataProvidedByEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataProvidedBy') }})
    datatype_features: Optional[list[shared_codat_public_api_models_platformcredentials_datatypefeatures.CodatPublicAPIModelsPlatformCredentialsDatatypeFeatures]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datatypeFeatures') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    integration_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationId') }})
    is_beta: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isBeta') }})
    is_offline_connector: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isOfflineConnector') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    linked_connections_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedConnectionsCount') }})
    logo_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logoUrl') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceId') }})
    source_type: Optional[shared_codat_public_api_models_platformcredentials_sourcetype_enum.CodatPublicAPIModelsPlatformCredentialsSourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceType') }})
    supported_environments: Optional[shared_codat_public_api_models_platformcredentials_integrationsupportedenvironments_enum.CodatPublicAPIModelsPlatformCredentialsIntegrationSupportedEnvironmentsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedEnvironments') }})
    total_connections_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalConnectionsCount') }})
    