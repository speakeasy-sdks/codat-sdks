package shared

import (
	"time"
)

type CodatPublicAPIModelsSyncSettingsSyncSettingModel struct {
	DataType         *string    `json:"dataType,omitempty"`
	FetchOnFirstLink *bool      `json:"fetchOnFirstLink,omitempty"`
	IsLocked         *bool      `json:"isLocked,omitempty"`
	MonthsToSync     *int32     `json:"monthsToSync,omitempty"`
	SyncFromUtc      *time.Time `json:"syncFromUtc,omitempty"`
	SyncFromWindow   *int32     `json:"syncFromWindow,omitempty"`
	SyncOrder        *int32     `json:"syncOrder,omitempty"`
	SyncSchedule     *int32     `json:"syncSchedule,omitempty"`
}
