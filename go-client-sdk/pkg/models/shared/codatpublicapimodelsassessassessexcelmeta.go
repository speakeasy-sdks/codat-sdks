package shared

import (
	"time"
)

type CodatPublicAPIModelsAssessAssessExcelMeta struct {
	ErrorMessage     *string    `json:"errorMessage,omitempty"`
	FileSize         *int32     `json:"fileSize,omitempty"`
	InProgress       *bool      `json:"inProgress,omitempty"`
	LastGenerated    *time.Time `json:"lastGenerated,omitempty"`
	LastInvocationID *string    `json:"lastInvocationId,omitempty"`
	Queued           *time.Time `json:"queued,omitempty"`
	ReportType       *string    `json:"reportType,omitempty"`
	Success          *bool      `json:"success,omitempty"`
}
