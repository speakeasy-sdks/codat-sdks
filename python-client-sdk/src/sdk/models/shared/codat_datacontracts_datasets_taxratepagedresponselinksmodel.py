import dataclasses
from ..shared import codat_datacontracts_datasets_taxratepagedresponsehrefmodel as shared_codat_datacontracts_datasets_taxratepagedresponsehrefmodel
from dataclasses_json import dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsTaxRatePagedResponseLinksModel:
    current: Optional[shared_codat_datacontracts_datasets_taxratepagedresponsehrefmodel.CodatDataContractsDatasetsTaxRatePagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    next: Optional[shared_codat_datacontracts_datasets_taxratepagedresponsehrefmodel.CodatDataContractsDatasetsTaxRatePagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[shared_codat_datacontracts_datasets_taxratepagedresponsehrefmodel.CodatDataContractsDatasetsTaxRatePagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    self: Optional[shared_codat_datacontracts_datasets_taxratepagedresponsehrefmodel.CodatDataContractsDatasetsTaxRatePagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    