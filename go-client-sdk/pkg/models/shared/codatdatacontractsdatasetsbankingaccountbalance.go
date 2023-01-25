package shared

import (
	"time"
)

type CodatDataContractsDatasetsBankingAccountBalance struct {
	AccountID          string                                                 `json:"accountId"`
	Balance            CodatDataContractsDatasetsBankingAccountBalanceAmounts `json:"balance"`
	Date               time.Time                                              `json:"date"`
	ModifiedDate       *time.Time                                             `json:"modifiedDate,omitempty"`
	SourceModifiedDate *time.Time                                             `json:"sourceModifiedDate,omitempty"`
}
