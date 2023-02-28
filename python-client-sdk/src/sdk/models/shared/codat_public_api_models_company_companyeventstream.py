from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import codat_public_api_models_company_companyeventstreamitem as shared_codat_public_api_models_company_companyeventstreamitem
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatPublicAPIModelsCompanyCompanyEventStream:
    company_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyId') }})
    data: list[shared_codat_public_api_models_company_companyeventstreamitem.CodatPublicAPIModelsCompanyCompanyEventStreamItem] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    from_: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    to: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    