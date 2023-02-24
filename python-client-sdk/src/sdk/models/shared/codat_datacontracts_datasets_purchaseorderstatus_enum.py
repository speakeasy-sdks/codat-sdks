from __future__ import annotations
import dataclasses
from enum import Enum

class CodatDataContractsDatasetsPurchaseOrderStatusEnum(str, Enum):
    UNKNOWN = "Unknown"
    DRAFT = "Draft"
    OPEN = "Open"
    CLOSED = "Closed"
    VOID = "Void"
