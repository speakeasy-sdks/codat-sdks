import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_standardreporting_contracts_idimension as shared_codat_standardreporting_contracts_idimension
from ..shared import codat_standardreporting_contracts_reporterror as shared_codat_standardreporting_contracts_reporterror
from ..shared import codat_standardreporting_contracts_measure as shared_codat_standardreporting_contracts_measure
from ..shared import codat_standardreporting_contracts_reportdata as shared_codat_standardreporting_contracts_reportdata


@dataclass_json
@dataclasses.dataclass
class CodatStandardReportingContractsReport:
    dimensions: Optional[list[shared_codat_standardreporting_contracts_idimension.CodatStandardReportingContractsIDimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    errors: Optional[list[shared_codat_standardreporting_contracts_reporterror.CodatStandardReportingContractsReportError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    measures: Optional[list[shared_codat_standardreporting_contracts_measure.CodatStandardReportingContractsMeasure]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measures') }})
    report_data: Optional[list[shared_codat_standardreporting_contracts_reportdata.CodatStandardReportingContractsReportData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportData') }})
    report_info: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportInfo') }})
    
