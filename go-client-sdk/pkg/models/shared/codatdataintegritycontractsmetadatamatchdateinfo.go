package shared

import (
	"time"
)

type CodatDataIntegrityContractsMetadataMatchDateInfo struct {
	MaxDate            *time.Time `json:"maxDate,omitempty"`
	MaxOverlappingDate *time.Time `json:"maxOverlappingDate,omitempty"`
	MinDate            *time.Time `json:"minDate,omitempty"`
	MinOverlappingDate *time.Time `json:"minOverlappingDate,omitempty"`
}
