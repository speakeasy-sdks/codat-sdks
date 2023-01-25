import dataclasses
from enum import Enum

class CodatDataContractsDatasetsSalesOrderStatusEnum(str, Enum):
    UNKNOWN = "Unknown"
    DRAFT = "Draft"
    OPEN = "Open"
    CLOSED = "Closed"
    VOID = "Void"

