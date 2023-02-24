from __future__ import annotations
import dataclasses
from enum import Enum

class CodatDataContractsDatasetsItemTypeEnum(str, Enum):
    UNKNOWN = "Unknown"
    INVENTORY = "Inventory"
    NON_INVENTORY = "NonInventory"
    SERVICE = "Service"
