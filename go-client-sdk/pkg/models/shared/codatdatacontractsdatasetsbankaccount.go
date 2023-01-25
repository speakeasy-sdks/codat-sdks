package shared

import (
	"time"
)

type CodatDataContractsDatasetsBankAccount struct {
	AccountName        *string                                        `json:"accountName,omitempty"`
	AccountNumber      *string                                        `json:"accountNumber,omitempty"`
	AccountType        *CodatDataContractsDatasetsBankAccountTypeEnum `json:"accountType,omitempty"`
	AvailableBalance   *float64                                       `json:"availableBalance,omitempty"`
	Balance            *float64                                       `json:"balance,omitempty"`
	Currency           *string                                        `json:"currency,omitempty"`
	IBan               *string                                        `json:"iBan,omitempty"`
	ID                 *string                                        `json:"id,omitempty"`
	Institution        *string                                        `json:"institution,omitempty"`
	Metadata           *CodatDataContractsDatasetsMetadata            `json:"metadata,omitempty"`
	ModifiedDate       *time.Time                                     `json:"modifiedDate,omitempty"`
	NominalCode        *string                                        `json:"nominalCode,omitempty"`
	OverdraftLimit     *float64                                       `json:"overdraftLimit,omitempty"`
	SortCode           *string                                        `json:"sortCode,omitempty"`
	SourceModifiedDate *time.Time                                     `json:"sourceModifiedDate,omitempty"`
}
