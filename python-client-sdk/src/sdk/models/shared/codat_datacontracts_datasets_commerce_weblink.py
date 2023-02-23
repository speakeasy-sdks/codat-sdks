import dataclasses
from ..shared import codat_datacontracts_datasets_commerce_weblinktype_enum as shared_codat_datacontracts_datasets_commerce_weblinktype_enum
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsCommerceWebLink:
    type: Optional[shared_codat_datacontracts_datasets_commerce_weblinktype_enum.CodatDataContractsDatasetsCommerceWebLinkTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    