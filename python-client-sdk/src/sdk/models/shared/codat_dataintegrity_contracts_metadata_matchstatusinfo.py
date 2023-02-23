import dataclasses
import dateutil.parser
from ..shared import codat_dataintegrity_contracts_metadata_runstatus_enum as shared_codat_dataintegrity_contracts_metadata_runstatus_enum
from dataclasses_json import dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatDataIntegrityContractsMetadataMatchStatusInfo:
    current_status: Optional[shared_codat_dataintegrity_contracts_metadata_runstatus_enum.CodatDataIntegrityContractsMetadataRunStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentStatus') }})
    last_matched: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastMatched'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    