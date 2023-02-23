import dataclasses
import dateutil.parser
from ..shared import codat_public_api_models_company_companyeventstreamitem as shared_codat_public_api_models_company_companyeventstreamitem
from dataclasses_json import dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsCompanyCompanyEventStream:
    company_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyId') }})
    data: list[shared_codat_public_api_models_company_companyeventstreamitem.CodatPublicAPIModelsCompanyCompanyEventStreamItem] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    from_: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    to: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    