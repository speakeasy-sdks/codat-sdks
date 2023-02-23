import dataclasses
from enum import Enum

class CodatDataContractsDatasetsCommercePaymentTypeEnum(str, Enum):
    UNKNOWN = "Unknown"
    CASH = "Cash"
    CARD = "Card"
    INVOICE = "Invoice"
    ONLINE_CARD = "OnlineCard"
    SWISH = "Swish"
    VIPPS = "Vipps"
    MOBILE = "Mobile"
    STORE_CREDIT = "StoreCredit"
    PAYPAL = "Paypal"
    CUSTOM = "Custom"
    PREPAID = "Prepaid"
