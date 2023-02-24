from __future__ import annotations
import dataclasses
from enum import Enum

class CodatDataContractsDatasetsCommercePlatformTransactionTypeEnum(str, Enum):
    UNKNOWN = "Unknown"
    PAYMENT = "Payment"
    REFUND = "Refund"
    PAYOUT = "Payout"
    FAILED_PAYOUT = "FailedPayout"
    TRANSFER = "Transfer"
    PAYMENT_FEE = "PaymentFee"
    PAYMENT_FEE_REFUND = "PaymentFeeRefund"
