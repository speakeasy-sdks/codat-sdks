from __future__ import annotations
import dataclasses
from enum import Enum

class CodatPublicAPIModelsPlatformCredentialsIntegrationSupportedEnvironmentsEnum(str, Enum):
    UNKNOWN = "Unknown"
    SANDBOX_ONLY = "SandboxOnly"
    LIVE_ONLY = "LiveOnly"
    LIVE_AND_SANDBOX = "LiveAndSandbox"
