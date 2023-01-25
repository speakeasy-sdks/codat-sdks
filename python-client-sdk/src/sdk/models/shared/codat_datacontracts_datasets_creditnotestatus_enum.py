import dataclasses
from enum import Enum

class CodatDataContractsDatasetsCreditNoteStatusEnum(str, Enum):
    UNKNOWN = "Unknown"
    DRAFT = "Draft"
    SUBMITTED = "Submitted"
    PAID = "Paid"
    VOID = "Void"
    PARTIALLY_PAID = "PartiallyPaid"

