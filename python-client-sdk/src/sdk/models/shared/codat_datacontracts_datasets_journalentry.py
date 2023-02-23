import dataclasses
import dateutil.parser
from ..shared import codat_datacontracts_datasets_datainterfaces_supplementaldata as shared_codat_datacontracts_datasets_datainterfaces_supplementaldata
from ..shared import codat_datacontracts_datasets_journalline as shared_codat_datacontracts_datasets_journalline
from ..shared import codat_datacontracts_datasets_journalref as shared_codat_datacontracts_datasets_journalref
from ..shared import codat_datacontracts_datasets_metadata as shared_codat_datacontracts_datasets_metadata
from ..shared import codat_datacontracts_datasets_recordref as shared_codat_datacontracts_datasets_recordref
from dataclasses_json import dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsJournalEntry:
    created_on: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    journal_lines: Optional[list[shared_codat_datacontracts_datasets_journalline.CodatDataContractsDatasetsJournalLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('journalLines') }})
    journal_ref: Optional[shared_codat_datacontracts_datasets_journalref.CodatDataContractsDatasetsJournalRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('journalRef') }})
    metadata: Optional[shared_codat_datacontracts_datasets_metadata.CodatDataContractsDatasetsMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    posted_on: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postedOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    record_ref: Optional[shared_codat_datacontracts_datasets_recordref.CodatDataContractsDatasetsRecordRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordRef') }})
    source_modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    supplemental_data: Optional[shared_codat_datacontracts_datasets_datainterfaces_supplementaldata.CodatDataContractsDatasetsDataInterfacesSupplementalData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supplementalData') }})
    updated_on: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    