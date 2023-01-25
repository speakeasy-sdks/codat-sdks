package shared

import (
	"time"
)

type CodatPublicAPIModelsCompanyCompanyEventStreamItem struct {
	Description  string    `json:"description"`
	EventTimeUtc time.Time `json:"eventTimeUtc"`
	Type         string    `json:"type"`
}
