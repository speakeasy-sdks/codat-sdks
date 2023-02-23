package shared

import (
	"time"
)

type CodatPublicAPIModelsSyncSettingsSyncSettingModel struct {
	DataType         *string    `json:"dataType,omitempty"`
	FetchOnFirstLink *bool      `json:"fetchOnFirstLink,omitempty"`
	IsLocked         *bool      `json:"isLocked,omitempty"`
	MonthsToSync     *int       `json:"monthsToSync,omitempty"`
	SyncFromUtc      *time.Time `json:"syncFromUtc,omitempty"`
	SyncFromWindow   *int       `json:"syncFromWindow,omitempty"`
	SyncOrder        *int       `json:"syncOrder,omitempty"`
	SyncSchedule     *int       `json:"syncSchedule,omitempty"`
}
