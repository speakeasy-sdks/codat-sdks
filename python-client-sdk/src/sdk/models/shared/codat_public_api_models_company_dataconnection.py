import dataclasses
import dateutil.parser
from ..shared import codat_public_api_models_company_dataconnectionerror as shared_codat_public_api_models_company_dataconnectionerror
from dataclasses_json import dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Any, Optional


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsCompanyDataConnection:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    integration_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationId') }})
    link_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkUrl') }})
    platform_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformName') }})
    source_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceId') }})
    connection_info: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionInfo') }})
    created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_connection_errors: Optional[list[shared_codat_public_api_models_company_dataconnectionerror.CodatPublicAPIModelsCompanyDataConnectionError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataConnectionErrors') }})
    integration_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationKey') }})
    last_sync: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSync'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceType') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    