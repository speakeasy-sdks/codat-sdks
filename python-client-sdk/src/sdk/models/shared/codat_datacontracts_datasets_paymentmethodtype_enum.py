import dataclasses
from enum import Enum

class CodatDataContractsDatasetsPaymentMethodTypeEnum(str, Enum):
    UNKNOWN = "Unknown"
    CASH = "Cash"
    CHECK = "Check"
    CREDIT_CARD = "CreditCard"
    DEBIT_CARD = "DebitCard"
    BANK_TRANSFER = "BankTransfer"
    OTHER = "Other"

