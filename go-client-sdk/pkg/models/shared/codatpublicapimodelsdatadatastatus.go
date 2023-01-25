package shared

import (
	"time"
)

type CodatPublicAPIModelsDataDataStatus struct {
	CurrentStatus          *string    `json:"currentStatus,omitempty"`
	DataType               string     `json:"dataType"`
	LastSuccessfulSync     *time.Time `json:"lastSuccessfulSync,omitempty"`
	LatestSuccessfulSyncID *string    `json:"latestSuccessfulSyncId,omitempty"`
	LatestSyncID           *string    `json:"latestSyncId,omitempty"`
}
