import dataclasses
from ..shared import codat_datacontracts_datasets_journalpagedresponsehrefmodel as shared_codat_datacontracts_datasets_journalpagedresponsehrefmodel
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsJournalPagedResponseLinksModel:
    current: Optional[shared_codat_datacontracts_datasets_journalpagedresponsehrefmodel.CodatDataContractsDatasetsJournalPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    next: Optional[shared_codat_datacontracts_datasets_journalpagedresponsehrefmodel.CodatDataContractsDatasetsJournalPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[shared_codat_datacontracts_datasets_journalpagedresponsehrefmodel.CodatDataContractsDatasetsJournalPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    self: Optional[shared_codat_datacontracts_datasets_journalpagedresponsehrefmodel.CodatDataContractsDatasetsJournalPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    