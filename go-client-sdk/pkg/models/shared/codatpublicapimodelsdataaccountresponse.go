package shared

import (
	"time"
)

type CodatPublicAPIModelsDataAccountResponse struct {
	Currency               *string                                              `json:"currency,omitempty"`
	CurrentBalance         *float64                                             `json:"currentBalance,omitempty"`
	Description            *string                                              `json:"description,omitempty"`
	FullyQualifiedCategory *string                                              `json:"fullyQualifiedCategory,omitempty"`
	FullyQualifiedName     *string                                              `json:"fullyQualifiedName,omitempty"`
	ID                     *string                                              `json:"id,omitempty"`
	IsBankAccount          *bool                                                `json:"isBankAccount,omitempty"`
	ModifiedDate           *time.Time                                           `json:"modifiedDate,omitempty"`
	Name                   *string                                              `json:"name,omitempty"`
	NominalCode            *string                                              `json:"nominalCode,omitempty"`
	SourceModifiedDate     *time.Time                                           `json:"sourceModifiedDate,omitempty"`
	Status                 *CodatPublicAPIModelsDataAccountStatusResponseEnum   `json:"status,omitempty"`
	Type                   *CodatPublicAPIModelsDataAccountTypeResponseEnum     `json:"type,omitempty"`
	ValidDatatypeLinks     []CodatPublicAPIModelsDataValidDatatypeLinksResponse `json:"validDatatypeLinks,omitempty"`
}
