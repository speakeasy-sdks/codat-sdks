from __future__ import annotations
import dataclasses
from ..shared import codat_standardreporting_contracts_idimension as shared_codat_standardreporting_contracts_idimension
from ..shared import codat_standardreporting_contracts_measure as shared_codat_standardreporting_contracts_measure
from ..shared import codat_standardreporting_contracts_reportdata as shared_codat_standardreporting_contracts_reportdata
from ..shared import codat_standardreporting_contracts_reporterror as shared_codat_standardreporting_contracts_reporterror
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatStandardReportingContractsReport:
    dimensions: Optional[list[shared_codat_standardreporting_contracts_idimension.CodatStandardReportingContractsIDimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions'), 'exclude': lambda f: f is None }})
    errors: Optional[list[shared_codat_standardreporting_contracts_reporterror.CodatStandardReportingContractsReportError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors'), 'exclude': lambda f: f is None }})
    measures: Optional[list[shared_codat_standardreporting_contracts_measure.CodatStandardReportingContractsMeasure]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measures'), 'exclude': lambda f: f is None }})
    report_data: Optional[list[shared_codat_standardreporting_contracts_reportdata.CodatStandardReportingContractsReportData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportData'), 'exclude': lambda f: f is None }})
    report_info: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportInfo'), 'exclude': lambda f: f is None }})
    