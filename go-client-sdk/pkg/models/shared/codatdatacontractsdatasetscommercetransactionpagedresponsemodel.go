package shared

// CodatDataContractsDatasetsCommerceTransactionPagedResponseModel
// Used to represent what can be returned by an endpoint that supports paging.
// Usable with the [ProducesResponseType] attribute on a controller action.
type CodatDataContractsDatasetsCommerceTransactionPagedResponseModel struct {
	Links        *CodatDataContractsDatasetsCommerceTransactionPagedResponseLinksModel `json:"_links,omitempty"`
	PageNumber   *int32                                                                `json:"pageNumber,omitempty"`
	PageSize     *int32                                                                `json:"pageSize,omitempty"`
	Results      []CodatDataContractsDatasetsCommerceTransaction                       `json:"results,omitempty"`
	TotalResults *int32                                                                `json:"totalResults,omitempty"`
}
