package shared

import (
	"time"
)

type CodatPublicAPIModelsFileMetadataModel struct {
	DisplayName *string    `json:"displayName,omitempty"`
	FileName    *string    `json:"fileName,omitempty"`
	SourceType  *string    `json:"sourceType,omitempty"`
	Uploaded    *time.Time `json:"uploaded,omitempty"`
}
