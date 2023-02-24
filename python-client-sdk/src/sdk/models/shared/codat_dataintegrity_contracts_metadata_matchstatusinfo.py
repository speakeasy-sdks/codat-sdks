from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import codat_dataintegrity_contracts_metadata_runstatus_enum as shared_codat_dataintegrity_contracts_metadata_runstatus_enum
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataIntegrityContractsMetadataMatchStatusInfo:
    current_status: Optional[shared_codat_dataintegrity_contracts_metadata_runstatus_enum.CodatDataIntegrityContractsMetadataRunStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentStatus'), 'exclude': lambda f: f is None }})
    last_matched: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastMatched'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage'), 'exclude': lambda f: f is None }})
    