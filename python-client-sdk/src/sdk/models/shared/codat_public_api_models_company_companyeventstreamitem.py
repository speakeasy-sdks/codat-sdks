import dataclasses
import dateutil.parser
from dataclasses_json import dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsCompanyCompanyEventStreamItem:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    event_time_utc: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTimeUtc'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    