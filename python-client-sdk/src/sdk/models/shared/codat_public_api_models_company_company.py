import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_public_api_models_company_dataconnection as shared_codat_public_api_models_company_dataconnection


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsCompanyCompany:
    data_connections: list[shared_codat_public_api_models_company_dataconnection.CodatPublicAPIModelsCompanyDataConnection] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataConnections') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    platform: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    redirect: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect') }})
    created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by_user_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdByUserName') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    last_sync: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSync'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
