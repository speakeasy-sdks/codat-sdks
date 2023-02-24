from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_weblinktype_enum as shared_codat_datacontracts_datasets_weblinktype_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataContractsDatasetsWebLink:
    type: shared_codat_datacontracts_datasets_weblinktype_enum.CodatDataContractsDatasetsWebLinkTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url'), 'exclude': lambda f: f is None }})
    