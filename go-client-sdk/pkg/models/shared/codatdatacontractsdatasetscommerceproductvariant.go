package shared

import (
	"time"
)

type CodatDataContractsDatasetsCommerceProductVariant struct {
	Barcode          *string                                                 `json:"barcode,omitempty"`
	CreatedDate      *time.Time                                              `json:"createdDate,omitempty"`
	ID               *string                                                 `json:"id,omitempty"`
	Inventory        *CodatDataContractsDatasetsCommerceInventory            `json:"inventory,omitempty"`
	IsTaxEnabled     *bool                                                   `json:"isTaxEnabled,omitempty"`
	Name             *string                                                 `json:"name,omitempty"`
	Prices           []CodatDataContractsDatasetsCommerceProductVariantPrice `json:"prices,omitempty"`
	Quantity         *float64                                                `json:"quantity,omitempty"`
	ShippingRequired *bool                                                   `json:"shippingRequired,omitempty"`
	Sku              *string                                                 `json:"sku,omitempty"`
	UnitOfMeasure    *string                                                 `json:"unitOfMeasure,omitempty"`
	VatPercentage    *float64                                                `json:"vatPercentage,omitempty"`
}
