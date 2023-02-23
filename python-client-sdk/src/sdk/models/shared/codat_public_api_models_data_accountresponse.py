import dataclasses
import dateutil.parser
from ..shared import codat_public_api_models_data_accountstatusresponse_enum as shared_codat_public_api_models_data_accountstatusresponse_enum
from ..shared import codat_public_api_models_data_accounttyperesponse_enum as shared_codat_public_api_models_data_accounttyperesponse_enum
from ..shared import codat_public_api_models_data_validdatatypelinksresponse as shared_codat_public_api_models_data_validdatatypelinksresponse
from dataclasses_json import dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatPublicAPIModelsDataAccountResponse:
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    current_balance: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentBalance') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    fully_qualified_category: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullyQualifiedCategory') }})
    fully_qualified_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullyQualifiedName') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_bank_account: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isBankAccount') }})
    modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nominal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nominalCode') }})
    source_modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[shared_codat_public_api_models_data_accountstatusresponse_enum.CodatPublicAPIModelsDataAccountStatusResponseEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[shared_codat_public_api_models_data_accounttyperesponse_enum.CodatPublicAPIModelsDataAccountTypeResponseEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    valid_datatype_links: Optional[list[shared_codat_public_api_models_data_validdatatypelinksresponse.CodatPublicAPIModelsDataValidDatatypeLinksResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validDatatypeLinks') }})
    