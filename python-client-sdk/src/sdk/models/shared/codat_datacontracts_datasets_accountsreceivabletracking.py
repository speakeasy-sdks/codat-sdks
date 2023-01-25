import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_trackingcategoryref as shared_codat_datacontracts_datasets_trackingcategoryref
from ..shared import codat_datacontracts_datasets_customerref as shared_codat_datacontracts_datasets_customerref
from ..shared import codat_datacontracts_datasets_accountsreceivableisbilledtotype_enum as shared_codat_datacontracts_datasets_accountsreceivableisbilledtotype_enum
from ..shared import codat_datacontracts_datasets_projectref as shared_codat_datacontracts_datasets_projectref


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsAccountsReceivableTracking:
    category_refs: list[shared_codat_datacontracts_datasets_trackingcategoryref.CodatDataContractsDatasetsTrackingCategoryRef] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryRefs') }})
    is_billed_to: shared_codat_datacontracts_datasets_accountsreceivableisbilledtotype_enum.CodatDataContractsDatasetsAccountsReceivableIsBilledToTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isBilledTo') }})
    is_rebilled_to: shared_codat_datacontracts_datasets_accountsreceivableisbilledtotype_enum.CodatDataContractsDatasetsAccountsReceivableIsBilledToTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRebilledTo') }})
    customer_ref: Optional[shared_codat_datacontracts_datasets_customerref.CodatDataContractsDatasetsCustomerRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerRef') }})
    project_ref: Optional[shared_codat_datacontracts_datasets_projectref.CodatDataContractsDatasetsProjectRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectRef') }})
    
