import dataclasses
import dateutil.parser
from ..shared import codat_datacontracts_datasets_contactref as shared_codat_datacontracts_datasets_contactref
from ..shared import codat_datacontracts_datasets_datainterfaces_supplementaldata as shared_codat_datacontracts_datasets_datainterfaces_supplementaldata
from ..shared import codat_datacontracts_datasets_fromaccount as shared_codat_datacontracts_datasets_fromaccount
from ..shared import codat_datacontracts_datasets_metadata as shared_codat_datacontracts_datasets_metadata
from ..shared import codat_datacontracts_datasets_recordref as shared_codat_datacontracts_datasets_recordref
from ..shared import codat_datacontracts_datasets_toaccount as shared_codat_datacontracts_datasets_toaccount
from ..shared import codat_datacontracts_datasets_trackingcategoryref as shared_codat_datacontracts_datasets_trackingcategoryref
from dataclasses_json import dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsTransfer:
    contact_ref: Optional[shared_codat_datacontracts_datasets_contactref.CodatDataContractsDatasetsContactRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactRef') }})
    date_: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deposited_record_refs: Optional[list[shared_codat_datacontracts_datasets_recordref.CodatDataContractsDatasetsRecordRef]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('depositedRecordRefs') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    from_: Optional[shared_codat_datacontracts_datasets_fromaccount.CodatDataContractsDatasetsFromAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    metadata: Optional[shared_codat_datacontracts_datasets_metadata.CodatDataContractsDatasetsMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source_modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    supplemental_data: Optional[shared_codat_datacontracts_datasets_datainterfaces_supplementaldata.CodatDataContractsDatasetsDataInterfacesSupplementalData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supplementalData') }})
    to: Optional[shared_codat_datacontracts_datasets_toaccount.CodatDataContractsDatasetsToAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    tracking_category_refs: Optional[list[shared_codat_datacontracts_datasets_trackingcategoryref.CodatDataContractsDatasetsTrackingCategoryRef]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingCategoryRefs') }})
    