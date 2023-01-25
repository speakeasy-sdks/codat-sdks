import dataclasses
from enum import Enum

class CodatDataContractsDatasetsCommerceAddressTypeEnum(str, Enum):
    UNKNOWN = "Unknown"
    BILLING = "Billing"
    DELIVERY = "Delivery"
    ORDER = "Order"
    INVENTORY = "Inventory"

