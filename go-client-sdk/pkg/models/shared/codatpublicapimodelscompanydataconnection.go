package shared

import (
	"time"
)

type CodatPublicAPIModelsCompanyDataConnection struct {
	ConnectionInfo       map[string]interface{}                           `json:"connectionInfo,omitempty"`
	Created              *time.Time                                       `json:"created,omitempty"`
	DataConnectionErrors []CodatPublicAPIModelsCompanyDataConnectionError `json:"dataConnectionErrors,omitempty"`
	ID                   string                                           `json:"id"`
	IntegrationID        string                                           `json:"integrationId"`
	IntegrationKey       *string                                          `json:"integrationKey,omitempty"`
	LastSync             *time.Time                                       `json:"lastSync,omitempty"`
	LinkURL              string                                           `json:"linkUrl"`
	PlatformName         string                                           `json:"platformName"`
	SourceID             string                                           `json:"sourceId"`
	SourceType           *string                                          `json:"sourceType,omitempty"`
	Status               *string                                          `json:"status,omitempty"`
}
