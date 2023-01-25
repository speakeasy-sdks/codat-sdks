package shared

import (
	"time"
)

type CodatPublicAPIModelsClientsClientSyncSettingsSinglePutModel struct {
	FetchOnFirstLink *bool      `json:"fetchOnFirstLink,omitempty"`
	MonthsToSync     *int32     `json:"monthsToSync,omitempty"`
	SyncFromUtc      *time.Time `json:"syncFromUtc,omitempty"`
	SyncFromWindow   *int32     `json:"syncFromWindow,omitempty"`
	SyncSchedule     *int32     `json:"syncSchedule,omitempty"`
}
