import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_agedcreditoroutstanding as shared_codat_datacontracts_datasets_agedcreditoroutstanding


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsAgedCreditorOutstandingICollectionReport:
    data: list[shared_codat_datacontracts_datasets_agedcreditoroutstanding.CodatDataContractsDatasetsAgedCreditorOutstanding] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    generated: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('generated'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    report_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
