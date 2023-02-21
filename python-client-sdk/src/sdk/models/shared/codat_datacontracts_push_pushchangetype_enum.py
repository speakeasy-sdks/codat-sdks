import dataclasses
from enum import Enum

class CodatDataContractsPushPushChangeTypeEnum(str, Enum):
    UNKNOWN = "Unknown"
    CREATED = "Created"
    MODIFIED = "Modified"
    DELETED = "Deleted"
    ATTACHMENT_UPLOADED = "AttachmentUploaded"

