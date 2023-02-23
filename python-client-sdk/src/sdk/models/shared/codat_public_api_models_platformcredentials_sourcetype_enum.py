import dataclasses
from enum import Enum

class CodatPublicAPIModelsPlatformCredentialsSourceTypeEnum(str, Enum):
    UNKNOWN = "Unknown"
    ACCOUNTING = "Accounting"
    BANKING = "Banking"
    BANK_FEED = "BankFeed"
    COMMERCE = "Commerce"
    EXPENSE = "Expense"
    OTHER = "Other"
