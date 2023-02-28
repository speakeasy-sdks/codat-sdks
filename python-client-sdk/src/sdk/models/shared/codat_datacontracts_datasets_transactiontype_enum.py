from __future__ import annotations
import dataclasses
from enum import Enum

class CodatDataContractsDatasetsTransactionTypeEnum(str, Enum):
    UNKNOWN = "Unknown"
    CREDIT = "Credit"
    DEBIT = "Debit"
    INT = "Int"
    DIV = "Div"
    FEE = "Fee"
    SER_CHG = "SerChg"
    DEP = "Dep"
    ATM = "Atm"
    POS = "Pos"
    XFER = "Xfer"
    CHECK = "Check"
    PAYMENT = "Payment"
    CASH = "Cash"
    DIRECT_DEP = "DirectDep"
    DIRECT_DEBIT = "DirectDebit"
    REPEAT_PMT = "RepeatPmt"
    OTHER = "Other"
