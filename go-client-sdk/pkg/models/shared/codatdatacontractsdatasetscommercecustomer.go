package shared

import (
	"time"
)

type CodatDataContractsDatasetsCommerceCustomer struct {
	Addresses          []CodatDataContractsDatasetsCommerceAddress `json:"addresses,omitempty"`
	CreatedDate        *time.Time                                  `json:"createdDate,omitempty"`
	CustomerName       *string                                     `json:"customerName,omitempty"`
	DefaultCurrency    *string                                     `json:"defaultCurrency,omitempty"`
	EmailAddress       *string                                     `json:"emailAddress,omitempty"`
	ID                 *string                                     `json:"id,omitempty"`
	ModifiedDate       *time.Time                                  `json:"modifiedDate,omitempty"`
	Note               *string                                     `json:"note,omitempty"`
	Phone              *string                                     `json:"phone,omitempty"`
	SourceModifiedDate *time.Time                                  `json:"sourceModifiedDate,omitempty"`
}
