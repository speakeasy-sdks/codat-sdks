package shared

import (
	"time"
)

type CodatDataContractsDatasetsBankingAccount struct {
	Balance            CodatDataContractsDatasetsBankingAccountBalanceAmounts `json:"balance"`
	Currency           string                                                 `json:"currency"`
	Holder             *string                                                `json:"holder,omitempty"`
	ID                 string                                                 `json:"id"`
	Identifiers        CodatDataContractsDatasetsBankingAccountIdentifiers    `json:"identifiers"`
	InformalName       *string                                                `json:"informalName,omitempty"`
	Institution        CodatDataContractsDatasetsBankingAccountInstitution    `json:"institution"`
	ModifiedDate       *time.Time                                             `json:"modifiedDate,omitempty"`
	Name               string                                                 `json:"name"`
	SourceModifiedDate *time.Time                                             `json:"sourceModifiedDate,omitempty"`
	Type               CodatDataContractsDatasetsBankingAccountTypeEnum       `json:"type"`
}
