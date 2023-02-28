from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_allocation as shared_codat_datacontracts_datasets_allocation
from ..shared import codat_datacontracts_datasets_paymentallocationpayment as shared_codat_datacontracts_datasets_paymentallocationpayment
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataContractsDatasetsDetailedPaymentAllocation:
    allocation: shared_codat_datacontracts_datasets_allocation.CodatDataContractsDatasetsAllocation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocation') }})
    payment: shared_codat_datacontracts_datasets_paymentallocationpayment.CodatDataContractsDatasetsPaymentAllocationPayment = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment') }})
    