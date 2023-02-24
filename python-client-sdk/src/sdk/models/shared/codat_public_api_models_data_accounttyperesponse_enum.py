from __future__ import annotations
import dataclasses
from enum import Enum

class CodatPublicAPIModelsDataAccountTypeResponseEnum(str, Enum):
    UNKNOWN = "Unknown"
    ASSET = "Asset"
    EXPENSE = "Expense"
    INCOME = "Income"
    LIABILITY = "Liability"
    EQUITY = "Equity"
