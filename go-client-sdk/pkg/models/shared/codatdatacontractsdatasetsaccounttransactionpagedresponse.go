package shared

type CodatDataContractsDatasetsAccountTransactionPagedResponse struct {
	Links        map[string]CodatDataContractsResponsesHalLink  `json:"_links,omitempty"`
	PageNumber   int                                            `json:"pageNumber"`
	PageSize     int                                            `json:"pageSize"`
	Results      []CodatDataContractsDatasetsAccountTransaction `json:"results,omitempty"`
	TotalResults int                                            `json:"totalResults"`
}
