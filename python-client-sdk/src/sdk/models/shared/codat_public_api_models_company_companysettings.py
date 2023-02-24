from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatPublicAPIModelsCompanyCompanySettings:
    company_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyId') }})
    offline_connector_install: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offlineConnectorInstall') }})
    