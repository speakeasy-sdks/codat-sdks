from __future__ import annotations
import dataclasses
from enum import Enum

class CodatDataContractsDatasetsAccountTypeEnum(str, Enum):
    UNKNOWN = "Unknown"
    ASSET = "Asset"
    EXPENSE = "Expense"
    INCOME = "Income"
    LIABILITY = "Liability"
    EQUITY = "Equity"
