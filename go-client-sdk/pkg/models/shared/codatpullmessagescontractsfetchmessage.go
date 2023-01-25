package shared

import (
	"time"
)

type CodatPullMessagesContractsFetchMessage struct {
	LogDateTimeUtc *time.Time `json:"logDateTimeUtc,omitempty"`
	LogLevel       *string    `json:"logLevel,omitempty"`
	Message        *string    `json:"message,omitempty"`
}
