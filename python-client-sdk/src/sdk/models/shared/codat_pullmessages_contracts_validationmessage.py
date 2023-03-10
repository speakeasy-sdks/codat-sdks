import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CodatPullMessagesContractsValidationMessage:
    item_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemId') }})
    log_date_time_utc: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logDateTimeUtc'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    log_level: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logLevel') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    rule_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleId') }})
    validator_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validatorName') }})
    
