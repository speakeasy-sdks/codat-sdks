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
class CodatDataContractsDatasetsCashFlowStatement:
    cash_payments: Optional[shared_codat_datacontracts_datasets_reportline.CodatDataContractsDatasetsReportLine] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cashPayments'), 'exclude': lambda f: f is None }})
    cash_receipts: Optional[shared_codat_datacontracts_datasets_reportline.CodatDataContractsDatasetsReportLine] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cashReceipts'), 'exclude': lambda f: f is None }})
    from_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    to_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    