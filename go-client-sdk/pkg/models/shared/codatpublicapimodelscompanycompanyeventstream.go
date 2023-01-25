package shared

import (
	"time"
)

type CodatPublicAPIModelsCompanyCompanyEventStream struct {
	CompanyID string                                              `json:"companyId"`
	Data      []CodatPublicAPIModelsCompanyCompanyEventStreamItem `json:"data"`
	From      *time.Time                                          `json:"from,omitempty"`
	To        *time.Time                                          `json:"to,omitempty"`
}
