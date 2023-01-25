package shared

import (
	"time"
)

type CodatDataIntegrityContractsDetailsTransactionDetails struct {
	Amount       *float64                                               `json:"amount,omitempty"`
	ConnectionID *string                                                `json:"connectionId,omitempty"`
	Currency     *string                                                `json:"currency,omitempty"`
	Date         *time.Time                                             `json:"date,omitempty"`
	Description  *string                                                `json:"description,omitempty"`
	ID           *string                                                `json:"id,omitempty"`
	Matches      []CodatDataIntegrityContractsDetailsTransactionDetails `json:"matches,omitempty"`
	Type         *string                                                `json:"type,omitempty"`
}
