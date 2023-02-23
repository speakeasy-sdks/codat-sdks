import dataclasses
from enum import Enum

class CodatDataIntegrityContractsMetadataRunStatusEnum(str, Enum):
    UNKNOWN = "Unknown"
    DOES_NOT_EXIST = "DoesNotExist"
    ERROR = "Error"
    PROCESSING = "Processing"
    COMPLETE_WITH_WARNING = "CompleteWithWarning"
    COMPLETE = "Complete"
