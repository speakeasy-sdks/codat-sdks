import dataclasses
from enum import Enum

class CodatDataContractsDatasetsCommerceTransactionRefTypeEnum(str, Enum):
    UNKNOWN = "Unknown"
    FEE = "Fee"
    ORDER = "Order"
    PAYMENT = "Payment"
    SERVICE_CHARGE = "ServiceCharge"

