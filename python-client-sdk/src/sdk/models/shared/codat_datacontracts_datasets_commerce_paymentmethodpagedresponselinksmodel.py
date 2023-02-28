from __future__ import annotations
import dataclasses
from ..shared import codat_datacontracts_datasets_commerce_paymentmethodpagedresponsehrefmodel as shared_codat_datacontracts_datasets_commerce_paymentmethodpagedresponsehrefmodel
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodatDataContractsDatasetsCommercePaymentMethodPagedResponseLinksModel:
    current: Optional[shared_codat_datacontracts_datasets_commerce_paymentmethodpagedresponsehrefmodel.CodatDataContractsDatasetsCommercePaymentMethodPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current'), 'exclude': lambda f: f is None }})
    next: Optional[shared_codat_datacontracts_datasets_commerce_paymentmethodpagedresponsehrefmodel.CodatDataContractsDatasetsCommercePaymentMethodPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next'), 'exclude': lambda f: f is None }})
    previous: Optional[shared_codat_datacontracts_datasets_commerce_paymentmethodpagedresponsehrefmodel.CodatDataContractsDatasetsCommercePaymentMethodPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous'), 'exclude': lambda f: f is None }})
    self: Optional[shared_codat_datacontracts_datasets_commerce_paymentmethodpagedresponsehrefmodel.CodatDataContractsDatasetsCommercePaymentMethodPagedResponseHrefModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self'), 'exclude': lambda f: f is None }})
    