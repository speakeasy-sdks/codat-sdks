package shared

import (
	"time"
)

type CodatDataContractsDatasetsAccount struct {
	Currency               *string                                        `json:"currency,omitempty"`
	CurrentBalance         *float64                                       `json:"currentBalance,omitempty"`
	Description            *string                                        `json:"description,omitempty"`
	FullyQualifiedCategory *string                                        `json:"fullyQualifiedCategory,omitempty"`
	FullyQualifiedName     *string                                        `json:"fullyQualifiedName,omitempty"`
	ID                     *string                                        `json:"id,omitempty"`
	IsBankAccount          bool                                           `json:"isBankAccount"`
	Metadata               *CodatDataContractsDatasetsMetadata            `json:"metadata,omitempty"`
	ModifiedDate           *time.Time                                     `json:"modifiedDate,omitempty"`
	Name                   *string                                        `json:"name,omitempty"`
	NominalCode            *string                                        `json:"nominalCode,omitempty"`
	SourceModifiedDate     *time.Time                                     `json:"sourceModifiedDate,omitempty"`
	Status                 CodatDataContractsDatasetsAccountStatusEnum    `json:"status"`
	Type                   CodatDataContractsDatasetsAccountTypeEnum      `json:"type"`
	ValidDatatypeLinks     []CodatDataContractsDatasetsValidDatatypeLinks `json:"validDatatypeLinks,omitempty"`
}
