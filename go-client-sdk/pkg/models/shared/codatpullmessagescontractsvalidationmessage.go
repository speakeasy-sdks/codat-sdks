package shared

import (
	"time"
)

type CodatPullMessagesContractsValidationMessage struct {
	ItemID         *string    `json:"itemId,omitempty"`
	LogDateTimeUtc *time.Time `json:"logDateTimeUtc,omitempty"`
	LogLevel       *string    `json:"logLevel,omitempty"`
	Message        *string    `json:"message,omitempty"`
	RuleID         *string    `json:"ruleId,omitempty"`
	ValidatorName  *string    `json:"validatorName,omitempty"`
}
