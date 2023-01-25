import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_reportline as shared_codat_datacontracts_datasets_reportline


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsBalanceSheet:
    net_assets: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('netAssets') }})
    assets: Optional[shared_codat_datacontracts_datasets_reportline.CodatDataContractsDatasetsReportLine] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    date_: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    equity: Optional[shared_codat_datacontracts_datasets_reportline.CodatDataContractsDatasetsReportLine] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('equity') }})
    liabilities: Optional[shared_codat_datacontracts_datasets_reportline.CodatDataContractsDatasetsReportLine] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liabilities') }})
    
