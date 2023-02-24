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
class CodatDataContractsDatasetsBalanceSheet:
    net_assets: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('netAssets') }})
    assets: Optional[shared_codat_datacontracts_datasets_reportline.CodatDataContractsDatasetsReportLine] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets'), 'exclude': lambda f: f is None }})
    date_: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    equity: Optional[shared_codat_datacontracts_datasets_reportline.CodatDataContractsDatasetsReportLine] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('equity'), 'exclude': lambda f: f is None }})
    liabilities: Optional[shared_codat_datacontracts_datasets_reportline.CodatDataContractsDatasetsReportLine] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liabilities'), 'exclude': lambda f: f is None }})
    