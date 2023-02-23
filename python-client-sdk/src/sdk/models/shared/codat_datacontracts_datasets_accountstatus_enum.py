import dataclasses
from enum import Enum

class CodatDataContractsDatasetsAccountStatusEnum(str, Enum):
    UNKNOWN = "Unknown"
    ACTIVE = "Active"
    ARCHIVED = "Archived"
    PENDING = "Pending"
