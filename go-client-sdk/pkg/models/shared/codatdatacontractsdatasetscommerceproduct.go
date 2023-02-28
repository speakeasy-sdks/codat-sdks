package shared

import (
	"time"
)

type CodatDataContractsDatasetsCommerceProduct struct {
	Categorization      *string                                                   `json:"categorization,omitempty"`
	CreatedDate         *time.Time                                                `json:"createdDate,omitempty"`
	Description         *string                                                   `json:"description,omitempty"`
	ID                  *string                                                   `json:"id,omitempty"`
	IsGiftCard          *bool                                                     `json:"isGiftCard,omitempty"`
	ModifiedDate        *time.Time                                                `json:"modifiedDate,omitempty"`
	Name                *string                                                   `json:"name,omitempty"`
	ProductCategoryRefs []CodatDataContractsDatasetsCommerceProductCategoryRef    `json:"productCategoryRefs,omitempty"`
	SourceModifiedDate  *time.Time                                                `json:"sourceModifiedDate,omitempty"`
	Status              *CodatDataContractsDatasetsCommerceProductStatusEnum      `json:"status,omitempty"`
	SupplementalData    *CodatDataContractsDatasetsDataInterfacesSupplementalData `json:"supplementalData,omitempty"`
	Variants            []CodatDataContractsDatasetsCommerceProductVariant        `json:"variants,omitempty"`
}
