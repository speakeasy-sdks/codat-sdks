import dataclasses
from ..shared import codat_public_api_models_platformcredentials_supportedfeaturestate as shared_codat_public_api_models_platformcredentials_supportedfeaturestate
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsPlatformCredentialsDatatypeFeatures:
    datatype: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datatype') }})
    supported_features: Optional[list[shared_codat_public_api_models_platformcredentials_supportedfeaturestate.CodatPublicAPIModelsPlatformCredentialsSupportedFeatureState]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedFeatures') }})
    