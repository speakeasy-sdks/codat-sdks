package shared

import (
	"time"
)

type CodatDataContractsDatasetsBankingTransaction struct {
	AccountID              string                                                       `json:"accountId"`
	Amount                 *float64                                                     `json:"amount,omitempty"`
	AuthorizedDate         *time.Time                                                   `json:"authorizedDate,omitempty"`
	Code                   *CodatDataContractsDatasetsBankingBankingTransactionCodeEnum `json:"code,omitempty"`
	Currency               string                                                       `json:"currency"`
	Description            *string                                                      `json:"description,omitempty"`
	ID                     string                                                       `json:"id"`
	MerchantName           *string                                                      `json:"merchantName,omitempty"`
	ModifiedDate           *time.Time                                                   `json:"modifiedDate,omitempty"`
	PostedDate             *time.Time                                                   `json:"postedDate,omitempty"`
	SourceModifiedDate     *time.Time                                                   `json:"sourceModifiedDate,omitempty"`
	TransactionCategoryRef *CodatDataContractsDatasetsBankingTransactionCategoryRef     `json:"transactionCategoryRef,omitempty"`
}
