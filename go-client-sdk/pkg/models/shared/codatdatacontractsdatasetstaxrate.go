package shared

import (
	"time"
)

type CodatDataContractsDatasetsTaxRate struct {
	Code               *string                                        `json:"code,omitempty"`
	Components         []CodatDataContractsDatasetsTaxRateComponent   `json:"components,omitempty"`
	EffectiveTaxRate   *float64                                       `json:"effectiveTaxRate,omitempty"`
	ID                 *string                                        `json:"id,omitempty"`
	Metadata           *CodatDataContractsDatasetsMetadata            `json:"metadata,omitempty"`
	ModifiedDate       *time.Time                                     `json:"modifiedDate,omitempty"`
	Name               *string                                        `json:"name,omitempty"`
	SourceModifiedDate *time.Time                                     `json:"sourceModifiedDate,omitempty"`
	Status             *CodatDataContractsDatasetsTaxRateStatusEnum   `json:"status,omitempty"`
	TotalTaxRate       *float64                                       `json:"totalTaxRate,omitempty"`
	ValidDatatypeLinks []CodatDataContractsDatasetsValidDatatypeLinks `json:"validDatatypeLinks,omitempty"`
}
