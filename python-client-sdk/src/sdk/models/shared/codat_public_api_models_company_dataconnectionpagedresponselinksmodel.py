import dataclasses
from ..shared import codat_public_api_models_company_dataconnectionpagedresponsehrefmodel as shared_codat_public_api_models_company_dataconnectionpagedresponsehrefmodel
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsCompanyDataConnectionPagedResponseLinksModel:
    current: Optional[shared_codat_public_api_models_company_dataconnectionpagedresponsehrefmodel.CodatPublicAPIModelsCompanyDataConnectionPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    next: Optional[shared_codat_public_api_models_company_dataconnectionpagedresponsehrefmodel.CodatPublicAPIModelsCompanyDataConnectionPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[shared_codat_public_api_models_company_dataconnectionpagedresponsehrefmodel.CodatPublicAPIModelsCompanyDataConnectionPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    self: Optional[shared_codat_public_api_models_company_dataconnectionpagedresponsehrefmodel.CodatPublicAPIModelsCompanyDataConnectionPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    