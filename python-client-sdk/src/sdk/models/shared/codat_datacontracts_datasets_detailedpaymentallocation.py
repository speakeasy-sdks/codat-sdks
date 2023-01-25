import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codat_datacontracts_datasets_allocation as shared_codat_datacontracts_datasets_allocation
from ..shared import codat_datacontracts_datasets_paymentallocationpayment as shared_codat_datacontracts_datasets_paymentallocationpayment


@dataclass_json
@dataclasses.dataclass
class CodatDataContractsDatasetsDetailedPaymentAllocation:
    allocation: shared_codat_datacontracts_datasets_allocation.CodatDataContractsDatasetsAllocation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocation') }})
    payment: shared_codat_datacontracts_datasets_paymentallocationpayment.CodatDataContractsDatasetsPaymentAllocationPayment = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment') }})
    
