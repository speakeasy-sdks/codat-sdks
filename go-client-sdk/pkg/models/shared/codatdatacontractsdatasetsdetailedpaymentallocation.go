package shared

type CodatDataContractsDatasetsDetailedPaymentAllocation struct {
	Allocation CodatDataContractsDatasetsAllocation               `json:"allocation"`
	Payment    CodatDataContractsDatasetsPaymentAllocationPayment `json:"payment"`
}
