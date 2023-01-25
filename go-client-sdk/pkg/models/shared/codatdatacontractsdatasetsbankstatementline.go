package shared

import (
	"time"
)

type CodatDataContractsDatasetsBankStatementLine struct {
	Amount             float64                                       `json:"amount"`
	Balance            float64                                       `json:"balance"`
	Counterparty       *string                                       `json:"counterparty,omitempty"`
	Date               time.Time                                     `json:"date"`
	Description        *string                                       `json:"description,omitempty"`
	ID                 *string                                       `json:"id,omitempty"`
	ModifiedDate       *time.Time                                    `json:"modifiedDate,omitempty"`
	Reconciled         bool                                          `json:"reconciled"`
	Reference          *string                                       `json:"reference,omitempty"`
	SourceModifiedDate *time.Time                                    `json:"sourceModifiedDate,omitempty"`
	TransactionType    CodatDataContractsDatasetsTransactionTypeEnum `json:"transactionType"`
}
