from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_accountspayableisbilledtotype_enum as shared_codat_datacontracts_datasets_accountspayableisbilledtotype_enum
from ..shared import codat_datacontracts_datasets_customerref as shared_codat_datacontracts_datasets_customerref
from ..shared import codat_datacontracts_datasets_projectref as shared_codat_datacontracts_datasets_projectref
from ..shared import codat_datacontracts_datasets_trackingcategoryref as shared_codat_datacontracts_datasets_trackingcategoryref
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataContractsDatasetsAccountsPayableTracking:
    category_refs: list[shared_codat_datacontracts_datasets_trackingcategoryref.CodatDataContractsDatasetsTrackingCategoryRef] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryRefs') }})
    is_billed_to: shared_codat_datacontracts_datasets_accountspayableisbilledtotype_enum.CodatDataContractsDatasetsAccountsPayableIsBilledToTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isBilledTo') }})
    is_rebilled_to: shared_codat_datacontracts_datasets_accountspayableisbilledtotype_enum.CodatDataContractsDatasetsAccountsPayableIsBilledToTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRebilledTo') }})
    customer_ref: Optional[shared_codat_datacontracts_datasets_customerref.CodatDataContractsDatasetsCustomerRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerRef'), 'exclude': lambda f: f is None }})
    project_ref: Optional[shared_codat_datacontracts_datasets_projectref.CodatDataContractsDatasetsProjectRef] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectRef'), 'exclude': lambda f: f is None }})
    