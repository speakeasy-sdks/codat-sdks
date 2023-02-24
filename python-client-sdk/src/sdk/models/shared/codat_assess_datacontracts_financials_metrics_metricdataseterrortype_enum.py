from __future__ import annotations
import dataclasses
from enum import Enum

class CodatAssessDataContractsFinancialsMetricsMetricDataSetErrorTypeEnum(str, Enum):
    DATES_OUT_OF_RANGE = "DatesOutOfRange"
    DATA_NOT_SYNCED = "DataNotSynced"
    DATA_SET_NOT_SUPPORTED = "DataSetNotSupported"
    DATA_SYNC_FAILED = "DataSyncFailed"
    DATA_TYPE_NOT_ENABLED = "DataTypeNotEnabled"
