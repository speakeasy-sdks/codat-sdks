package shared

import (
	"time"
)

type CodatDataContractsDatasetsBankTransaction struct {
	AccountID          *string                                        `json:"accountId,omitempty"`
	Amount             *float64                                       `json:"amount,omitempty"`
	Balance            *float64                                       `json:"balance,omitempty"`
	ClearedOnDate      *time.Time                                     `json:"clearedOnDate,omitempty"`
	Counterparty       *string                                        `json:"counterparty,omitempty"`
	Description        *string                                        `json:"description,omitempty"`
	ID                 *string                                        `json:"id,omitempty"`
	ModifiedDate       *time.Time                                     `json:"modifiedDate,omitempty"`
	Reconciled         *bool                                          `json:"reconciled,omitempty"`
	Reference          *string                                        `json:"reference,omitempty"`
	SourceModifiedDate *time.Time                                     `json:"sourceModifiedDate,omitempty"`
	TransactionType    *CodatDataContractsDatasetsTransactionTypeEnum `json:"transactionType,omitempty"`
}
