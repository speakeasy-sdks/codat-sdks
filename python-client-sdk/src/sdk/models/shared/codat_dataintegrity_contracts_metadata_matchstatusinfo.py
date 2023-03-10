import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_dataintegrity_contracts_metadata_runstatus_enum as shared_codat_dataintegrity_contracts_metadata_runstatus_enum


@dataclass_json
@dataclasses.dataclass
class CodatDataIntegrityContractsMetadataMatchStatusInfo:
    current_status: Optional[shared_codat_dataintegrity_contracts_metadata_runstatus_enum.CodatDataIntegrityContractsMetadataRunStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentStatus') }})
    last_matched: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastMatched'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    
