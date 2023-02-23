import dataclasses
from enum import Enum

class CodatDataContractsDatasetsBillStatusEnum(str, Enum):
    UNKNOWN = "Unknown"
    OPEN = "Open"
    PARTIALLY_PAID = "PartiallyPaid"
    PAID = "Paid"
    VOID = "Void"
    DRAFT = "Draft"
