package shared

import (
	"time"
)

type CodatDataContractsDatasetsContact struct {
	Address      *CodatDataContractsDatasetsAddress           `json:"address,omitempty"`
	Email        *string                                      `json:"email,omitempty"`
	ModifiedDate *time.Time                                   `json:"modifiedDate,omitempty"`
	Name         *string                                      `json:"name,omitempty"`
	Phone        []CodatDataContractsDatasetsPhone            `json:"phone,omitempty"`
	Status       CodatDataContractsDatasetsCustomerStatusEnum `json:"status"`
}
