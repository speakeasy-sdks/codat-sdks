package shared

import (
	"time"
)

type CodatDataContractsDatasetsBankAccountPushOperation struct {
	Changes           []CodatDataContractsPushPushOperationChange   `json:"changes,omitempty"`
	CompanyID         string                                        `json:"companyId"`
	CompletedOnUtc    *time.Time                                    `json:"completedOnUtc,omitempty"`
	Data              *CodatDataContractsDatasetsBankAccount        `json:"data,omitempty"`
	DataConnectionKey string                                        `json:"dataConnectionKey"`
	DataType          *string                                       `json:"dataType,omitempty"`
	ErrorMessage      *string                                       `json:"errorMessage,omitempty"`
	PushOperationKey  string                                        `json:"pushOperationKey"`
	RequestedOnUtc    time.Time                                     `json:"requestedOnUtc"`
	Status            string                                        `json:"status"`
	StatusCode        int                                           `json:"statusCode"`
	TimeoutInMinutes  *int                                          `json:"timeoutInMinutes,omitempty"`
	TimeoutInSeconds  *int                                          `json:"timeoutInSeconds,omitempty"`
	Validation        *CodatDataContractsValidationValidationResult `json:"validation,omitempty"`
}
