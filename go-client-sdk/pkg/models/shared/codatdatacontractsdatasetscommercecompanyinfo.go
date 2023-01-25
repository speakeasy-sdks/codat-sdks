package shared

import (
	"time"
)

type CodatDataContractsDatasetsCommerceCompanyInfo struct {
	AccountBalances     []CodatDataContractsDatasetsCommerceAccountBalance `json:"accountBalances,omitempty"`
	Addresses           []CodatDataContractsDatasetsCommerceAddress        `json:"addresses,omitempty"`
	BaseCurrency        *string                                            `json:"baseCurrency,omitempty"`
	CommercePlatformRef *string                                            `json:"commercePlatformRef,omitempty"`
	CompanyLegalName    *string                                            `json:"companyLegalName,omitempty"`
	CompanyName         *string                                            `json:"companyName,omitempty"`
	CreatedDate         *time.Time                                         `json:"createdDate,omitempty"`
	ModifiedDate        *time.Time                                         `json:"modifiedDate,omitempty"`
	PhoneNumbers        []CodatDataContractsDatasetsCommercePhone          `json:"phoneNumbers,omitempty"`
	RegistrationNumber  *string                                            `json:"registrationNumber,omitempty"`
	SourceModifiedDate  *time.Time                                         `json:"sourceModifiedDate,omitempty"`
	SourceUrls          map[string]string                                  `json:"sourceUrls,omitempty"`
	WebLinks            []CodatDataContractsDatasetsCommerceWebLink        `json:"webLinks,omitempty"`
}
