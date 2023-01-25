package shared

type CodatDataContractsDatasetsAccountTransactionPagedResponse struct {
	Links        map[string]CodatDataContractsResponsesHalLink  `json:"_links,omitempty"`
	PageNumber   int32                                          `json:"pageNumber"`
	PageSize     int32                                          `json:"pageSize"`
	Results      []CodatDataContractsDatasetsAccountTransaction `json:"results,omitempty"`
	TotalResults int32                                          `json:"totalResults"`
}
