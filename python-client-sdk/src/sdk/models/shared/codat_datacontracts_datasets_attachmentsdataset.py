import dataclasses
from ..shared import codat_datacontracts_datasets_attachmentsdataset_attachment as shared_codat_datacontracts_datasets_attachmentsdataset_attachment
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsAttachmentsDataset:
    attachments: Optional[list[shared_codat_datacontracts_datasets_attachmentsdataset_attachment.CodatDataContractsDatasetsAttachmentsDatasetAttachment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachments') }})
    