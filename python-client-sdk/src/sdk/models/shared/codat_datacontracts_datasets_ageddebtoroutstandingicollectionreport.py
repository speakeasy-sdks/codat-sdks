from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import codat_datacontracts_datasets_ageddebtoroutstanding as shared_codat_datacontracts_datasets_ageddebtoroutstanding
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataContractsDatasetsAgedDebtorOutstandingICollectionReport:
    data: list[shared_codat_datacontracts_datasets_ageddebtoroutstanding.CodatDataContractsDatasetsAgedDebtorOutstanding] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    generated: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('generated'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    report_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    