import dataclasses
from ..shared import codat_standardreporting_contracts_reporterrortype_enum as shared_codat_standardreporting_contracts_reporterrortype_enum
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatStandardReportingContractsReportError:
    details: Optional[dict[str, list[str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    type: Optional[shared_codat_standardreporting_contracts_reporterrortype_enum.CodatStandardReportingContractsReportErrorTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    