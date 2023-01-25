import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_salesorderpagedresponsehrefmodel as shared_codat_datacontracts_datasets_salesorderpagedresponsehrefmodel


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsSalesOrderPagedResponseLinksModel:
    current: Optional[shared_codat_datacontracts_datasets_salesorderpagedresponsehrefmodel.CodatDataContractsDatasetsSalesOrderPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    next: Optional[shared_codat_datacontracts_datasets_salesorderpagedresponsehrefmodel.CodatDataContractsDatasetsSalesOrderPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[shared_codat_datacontracts_datasets_salesorderpagedresponsehrefmodel.CodatDataContractsDatasetsSalesOrderPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    self: Optional[shared_codat_datacontracts_datasets_salesorderpagedresponsehrefmodel.CodatDataContractsDatasetsSalesOrderPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
