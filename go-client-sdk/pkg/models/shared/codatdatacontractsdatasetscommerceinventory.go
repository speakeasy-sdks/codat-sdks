package shared

type CodatDataContractsDatasetsCommerceInventory struct {
	Locations     []CodatDataContractsDatasetsCommerceInventoryLocation `json:"locations,omitempty"`
	TotalQuantity *float64                                              `json:"totalQuantity,omitempty"`
}
