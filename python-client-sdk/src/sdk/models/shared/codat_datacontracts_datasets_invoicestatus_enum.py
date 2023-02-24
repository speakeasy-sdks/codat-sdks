from __future__ import annotations
import dataclasses
from enum import Enum

class CodatDataContractsDatasetsInvoiceStatusEnum(str, Enum):
    UNKNOWN = "Unknown"
    DRAFT = "Draft"
    SUBMITTED = "Submitted"
    PARTIALLY_PAID = "PartiallyPaid"
    PAID = "Paid"
    VOID = "Void"
