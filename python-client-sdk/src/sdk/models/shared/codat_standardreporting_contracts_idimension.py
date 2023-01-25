import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_standardreporting_contracts_idimensionitem as shared_codat_standardreporting_contracts_idimensionitem


@dataclass_json
@dataclasses.dataclass
class CodatStandardReportingContractsIDimension:
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    items: Optional[list[shared_codat_standardreporting_contracts_idimensionitem.CodatStandardReportingContractsIDimensionItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
