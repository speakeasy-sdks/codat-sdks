import dataclasses
from ..shared import codat_dataintegrity_contracts_metadata_matchmetadata as shared_codat_dataintegrity_contracts_metadata_matchmetadata
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatDataIntegrityContractsMetadataMatchMetadataResponse:
    metadata: Optional[list[shared_codat_dataintegrity_contracts_metadata_matchmetadata.CodatDataIntegrityContractsMetadataMatchMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    