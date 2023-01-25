package shared

import (
	"time"
)

type SystemObjectPushOperation struct {
	Changes           []CodatDataContractsPushPushOperationChange   `json:"changes,omitempty"`
	CompanyID         string                                        `json:"companyId"`
	CompletedOnUtc    *time.Time                                    `json:"completedOnUtc,omitempty"`
	Data              *interface{}                                  `json:"data,omitempty"`
	DataConnectionKey string                                        `json:"dataConnectionKey"`
	DataType          *string                                       `json:"dataType,omitempty"`
	ErrorMessage      *string                                       `json:"errorMessage,omitempty"`
	PushOperationKey  string                                        `json:"pushOperationKey"`
	RequestedOnUtc    time.Time                                     `json:"requestedOnUtc"`
	Status            string                                        `json:"status"`
	StatusCode        int32                                         `json:"statusCode"`
	TimeoutInMinutes  *int32                                        `json:"timeoutInMinutes,omitempty"`
	TimeoutInSeconds  *int32                                        `json:"timeoutInSeconds,omitempty"`
	Validation        *CodatDataContractsValidationValidationResult `json:"validation,omitempty"`
}
