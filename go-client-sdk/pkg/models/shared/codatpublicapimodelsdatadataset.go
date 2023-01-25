package shared

import (
	"time"
)

type CodatPublicAPIModelsDataDataSet struct {
	CompanyID                string                                    `json:"companyId"`
	Completed                *time.Time                                `json:"completed,omitempty"`
	ConnectionID             string                                    `json:"connectionId"`
	DataType                 *string                                   `json:"dataType,omitempty"`
	ErrorMessage             *string                                   `json:"errorMessage,omitempty"`
	ID                       string                                    `json:"id"`
	IsCompleted              bool                                      `json:"isCompleted"`
	IsErrored                bool                                      `json:"isErrored"`
	Progress                 int32                                     `json:"progress"`
	Requested                time.Time                                 `json:"requested"`
	Status                   CodatPublicAPIModelsDataDatasetStatusEnum `json:"status"`
	ValidationinformationURL *string                                   `json:"validationinformationUrl,omitempty"`
}
