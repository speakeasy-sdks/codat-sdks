from __future__ import annotations
import dataclasses
from ..shared import codat_standardreporting_contracts_idimensionitem as shared_codat_standardreporting_contracts_idimensionitem
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatStandardReportingContractsIDimension:
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName'), 'exclude': lambda f: f is None }})
    index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index'), 'exclude': lambda f: f is None }})
    items: Optional[list[shared_codat_standardreporting_contracts_idimensionitem.CodatStandardReportingContractsIDimensionItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items'), 'exclude': lambda f: f is None }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type'), 'exclude': lambda f: f is None }})
    