from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import codat_datacontracts_datasets_reportline as shared_codat_datacontracts_datasets_reportline
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataContractsDatasetsProfitAndLossReport:
    gross_profit: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grossProfit') }})
    net_operating_profit: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('netOperatingProfit') }})
    net_other_income: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('netOtherIncome') }})
    net_profit: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('netProfit') }})
    cost_of_sales: Optional[shared_codat_datacontracts_datasets_reportline.CodatDataContractsDatasetsReportLine] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costOfSales'), 'exclude': lambda f: f is None }})
    expenses: Optional[shared_codat_datacontracts_datasets_reportline.CodatDataContractsDatasetsReportLine] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expenses'), 'exclude': lambda f: f is None }})
    from_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    income: Optional[shared_codat_datacontracts_datasets_reportline.CodatDataContractsDatasetsReportLine] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('income'), 'exclude': lambda f: f is None }})
    other_expenses: Optional[shared_codat_datacontracts_datasets_reportline.CodatDataContractsDatasetsReportLine] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherExpenses'), 'exclude': lambda f: f is None }})
    other_income: Optional[shared_codat_datacontracts_datasets_reportline.CodatDataContractsDatasetsReportLine] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherIncome'), 'exclude': lambda f: f is None }})
    to_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    