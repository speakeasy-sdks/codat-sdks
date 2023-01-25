import dataclasses
from enum import Enum

class CodatStandardReportingContractsReportErrorTypeEnum(str, Enum):
    DATES_OUT_OF_RANGE = "DatesOutOfRange"
    DATA_NOT_SYNCED = "DataNotSynced"
    DATA_SET_NOT_SUPPORTED = "DataSetNotSupported"
    DATA_SYNC_FAILED = "DataSyncFailed"
    DATA_TYPE_NOT_ENABLED = "DataTypeNotEnabled"
    UNCATEGORIZED_ACCOUNTS = "UncategorizedAccounts"
    DATA_SET_NOT_AVAILABLE = "DataSetNotAvailable"
    VALIDATION_ERROR = "ValidationError"

