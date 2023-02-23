package shared

type CodatDataIntegrityContractsDetailsTransactionDetailsPagedResponse struct {
	Links        map[string]CodatDataContractsResponsesHalLink          `json:"_links,omitempty"`
	PageNumber   int                                                    `json:"pageNumber"`
	PageSize     int                                                    `json:"pageSize"`
	Results      []CodatDataIntegrityContractsDetailsTransactionDetails `json:"results,omitempty"`
	TotalResults int                                                    `json:"totalResults"`
}
