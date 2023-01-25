package shared

import (
	"time"
)

type CodatDataIntegrityContractsMetadataMatchStatusInfo struct {
	CurrentStatus *CodatDataIntegrityContractsMetadataRunStatusEnum `json:"currentStatus,omitempty"`
	LastMatched   *time.Time                                        `json:"lastMatched,omitempty"`
	StatusMessage *string                                           `json:"statusMessage,omitempty"`
}
