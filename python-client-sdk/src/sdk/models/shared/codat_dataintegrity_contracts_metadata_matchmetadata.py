from __future__ import annotations
import dataclasses
from ..shared import codat_dataintegrity_contracts_metadata_matchamountinfo as shared_codat_dataintegrity_contracts_metadata_matchamountinfo
from ..shared import codat_dataintegrity_contracts_metadata_matchconnectionids as shared_codat_dataintegrity_contracts_metadata_matchconnectionids
from ..shared import codat_dataintegrity_contracts_metadata_matchdateinfo as shared_codat_dataintegrity_contracts_metadata_matchdateinfo
from ..shared import codat_dataintegrity_contracts_metadata_matchstatusinfo as shared_codat_dataintegrity_contracts_metadata_matchstatusinfo
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataIntegrityContractsMetadataMatchMetadata:
    amounts: Optional[shared_codat_dataintegrity_contracts_metadata_matchamountinfo.CodatDataIntegrityContractsMetadataMatchAmountInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amounts'), 'exclude': lambda f: f is None }})
    connection_ids: Optional[shared_codat_dataintegrity_contracts_metadata_matchconnectionids.CodatDataIntegrityContractsMetadataMatchConnectionIds] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionIds'), 'exclude': lambda f: f is None }})
    dates: Optional[shared_codat_dataintegrity_contracts_metadata_matchdateinfo.CodatDataIntegrityContractsMetadataMatchDateInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dates'), 'exclude': lambda f: f is None }})
    status_info: Optional[shared_codat_dataintegrity_contracts_metadata_matchstatusinfo.CodatDataIntegrityContractsMetadataMatchStatusInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusInfo'), 'exclude': lambda f: f is None }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type'), 'exclude': lambda f: f is None }})
    