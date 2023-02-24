from __future__ import annotations
import dataclasses
from enum import Enum

class CodatDataContractsDatasetsInvoicingStatusEnum(str, Enum):
    UNKNOWN = "Unknown"
    PARTIALLY_INVOICED = "PartiallyInvoiced"
    INVOICED = "Invoiced"
    NOT_INVOICED = "NotInvoiced"
