import dataclasses
from enum import Enum

class CodatDataContractsDatasetsPaymentLinkTypeEnum(str, Enum):
    UNKNOWN = "Unknown"
    UNLINKED = "Unlinked"
    INVOICE = "Invoice"
    CREDIT_NOTE = "CreditNote"
    OTHER = "Other"
    REFUND = "Refund"
    PAYMENT = "Payment"
    PAYMENT_ON_ACCOUNT = "PaymentOnAccount"
    MANUAL_JOURNAL = "ManualJournal"
    DISCOUNT = "Discount"
