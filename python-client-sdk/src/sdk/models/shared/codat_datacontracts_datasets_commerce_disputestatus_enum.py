from __future__ import annotations
import dataclasses
from enum import Enum

class CodatDataContractsDatasetsCommerceDisputeStatusEnum(str, Enum):
    UNKNOWN = "Unknown"
    WON = "Won"
    LOST = "Lost"
    ACCEPTED = "Accepted"
    PROCESSING = "Processing"
    CHARGE_REFUNDED = "ChargeRefunded"
    EVIDENCE_REQUIRED = "EvidenceRequired"
    INQUIRY_EVIDENCE_REQUIRED = "InquiryEvidenceRequired"
    INQUIRY_PROCESSING = "InquiryProcessing"
    INQUIRY_CLOSED = "InquiryClosed"
    WAITING_THIRD_PARTY = "WaitingThirdParty"
