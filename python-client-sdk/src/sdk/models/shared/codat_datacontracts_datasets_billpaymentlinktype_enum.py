from __future__ import annotations
import dataclasses
from enum import Enum

class CodatDataContractsDatasetsBillPaymentLinkTypeEnum(str, Enum):
    UNKNOWN = "Unknown"
    UNLINKED = "Unlinked"
    BILL = "Bill"
    OTHER = "Other"
    CREDIT_NOTE = "CreditNote"
    BILL_PAYMENT = "BillPayment"
    PAYMENT_ON_ACCOUNT = "PaymentOnAccount"
    REFUND = "Refund"
    MANUAL_JOURNAL = "ManualJournal"
    DISCOUNT = "Discount"
