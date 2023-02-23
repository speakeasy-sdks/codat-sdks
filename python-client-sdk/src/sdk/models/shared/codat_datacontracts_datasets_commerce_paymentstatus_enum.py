import dataclasses
from enum import Enum

class CodatDataContractsDatasetsCommercePaymentStatusEnum(str, Enum):
    UNKNOWN = "Unknown"
    PENDING = "Pending"
    AUTHORIZED = "Authorized"
    PAID = "Paid"
    FAILED = "Failed"
    CANCELLED = "Cancelled"
