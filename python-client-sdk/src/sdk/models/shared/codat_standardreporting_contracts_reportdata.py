from __future__ import annotations
import dataclasses
from ..shared import codat_standardreporting_contracts_ireportdatameasure as shared_codat_standardreporting_contracts_ireportdatameasure
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatStandardReportingContractsReportData:
    components: Optional[list[CodatStandardReportingContractsReportData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('components'), 'exclude': lambda f: f is None }})
    dimension: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension'), 'exclude': lambda f: f is None }})
    dimension_display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionDisplayName'), 'exclude': lambda f: f is None }})
    item: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item'), 'exclude': lambda f: f is None }})
    item_display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemDisplayName'), 'exclude': lambda f: f is None }})
    measures: Optional[list[shared_codat_standardreporting_contracts_ireportdatameasure.CodatStandardReportingContractsIReportDataMeasure]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measures'), 'exclude': lambda f: f is None }})
    