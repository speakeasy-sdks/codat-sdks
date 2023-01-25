package shared

import (
	"time"
)

type CodatDataContractsDatasetsAccountTransaction struct {
	BankAccountRef     *CodatDataContractsDatasetsAccountRef                   `json:"bankAccountRef,omitempty"`
	Currency           *string                                                 `json:"currency,omitempty"`
	CurrencyRate       *float64                                                `json:"currencyRate,omitempty"`
	Date               *time.Time                                              `json:"date,omitempty"`
	ID                 *string                                                 `json:"id,omitempty"`
	Lines              []CodatDataContractsDatasetsAccountTransactionLine      `json:"lines,omitempty"`
	Metadata           *CodatDataContractsDatasetsMetadata                     `json:"metadata,omitempty"`
	ModifiedDate       *time.Time                                              `json:"modifiedDate,omitempty"`
	Note               *string                                                 `json:"note,omitempty"`
	SourceModifiedDate *time.Time                                              `json:"sourceModifiedDate,omitempty"`
	Status             *CodatDataContractsDatasetsAccountTransactionStatusEnum `json:"status,omitempty"`
	TotalAmount        *float64                                                `json:"totalAmount,omitempty"`
	TransactionID      *string                                                 `json:"transactionId,omitempty"`
}
