import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Any, Optional


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsDataInterfacesSupplementalData:
    content: Optional[dict[str, dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    