package shared

import (
	"time"
)

type CodatDataContractsDatasetsCustomer struct {
	Addresses          []CodatDataContractsDatasetsAddress                       `json:"addresses,omitempty"`
	ContactName        *string                                                   `json:"contactName,omitempty"`
	Contacts           []CodatDataContractsDatasetsContact                       `json:"contacts,omitempty"`
	CustomerName       *string                                                   `json:"customerName,omitempty"`
	DefaultCurrency    *string                                                   `json:"defaultCurrency,omitempty"`
	EmailAddress       *string                                                   `json:"emailAddress,omitempty"`
	ID                 *string                                                   `json:"id,omitempty"`
	Metadata           *CodatDataContractsDatasetsMetadata                       `json:"metadata,omitempty"`
	ModifiedDate       *time.Time                                                `json:"modifiedDate,omitempty"`
	Phone              *string                                                   `json:"phone,omitempty"`
	RegistrationNumber *string                                                   `json:"registrationNumber,omitempty"`
	SourceModifiedDate *time.Time                                                `json:"sourceModifiedDate,omitempty"`
	Status             CodatDataContractsDatasetsCustomerStatusEnum              `json:"status"`
	SupplementalData   *CodatDataContractsDatasetsDataInterfacesSupplementalData `json:"supplementalData,omitempty"`
	TaxNumber          *string                                                   `json:"taxNumber,omitempty"`
}
