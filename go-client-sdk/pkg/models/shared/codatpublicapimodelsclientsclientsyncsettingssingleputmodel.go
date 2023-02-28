package shared

import (
	"time"
)

type CodatPublicAPIModelsClientsClientSyncSettingsSinglePutModel struct {
	FetchOnFirstLink *bool      `json:"fetchOnFirstLink,omitempty"`
	MonthsToSync     *int       `json:"monthsToSync,omitempty"`
	SyncFromUtc      *time.Time `json:"syncFromUtc,omitempty"`
	SyncFromWindow   *int       `json:"syncFromWindow,omitempty"`
	SyncSchedule     *int       `json:"syncSchedule,omitempty"`
}
