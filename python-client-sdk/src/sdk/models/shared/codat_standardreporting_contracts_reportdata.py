import dataclasses
from ..shared import codat_standardreporting_contracts_ireportdatameasure as shared_codat_standardreporting_contracts_ireportdatameasure
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatStandardReportingContractsReportData:
    components: Optional[list[CodatStandardReportingContractsReportData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('components') }})
    dimension: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension') }})
    dimension_display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionDisplayName') }})
    item: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    item_display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemDisplayName') }})
    measures: Optional[list[shared_codat_standardreporting_contracts_ireportdatameasure.CodatStandardReportingContractsIReportDataMeasure]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measures') }})
    