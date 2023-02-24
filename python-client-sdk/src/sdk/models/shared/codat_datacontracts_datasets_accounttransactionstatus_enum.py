from __future__ import annotations
import dataclasses
from enum import Enum

class CodatDataContractsDatasetsAccountTransactionStatusEnum(str, Enum):
    UNKNOWN = "Unknown"
    UNRECONCILED = "Unreconciled"
    RECONCILED = "Reconciled"
    VOID = "Void"
