package shared

// CodatDataContractsDatasetsCommerceProductPagedResponseModel
// Used to represent what can be returned by an endpoint that supports paging.
// Usable with the [ProducesResponseType] attribute on a controller action.
type CodatDataContractsDatasetsCommerceProductPagedResponseModel struct {
	Links        *CodatDataContractsDatasetsCommerceProductPagedResponseLinksModel `json:"_links,omitempty"`
	PageNumber   *int32                                                            `json:"pageNumber,omitempty"`
	PageSize     *int32                                                            `json:"pageSize,omitempty"`
	Results      []CodatDataContractsDatasetsCommerceProduct                       `json:"results,omitempty"`
	TotalResults *int32                                                            `json:"totalResults,omitempty"`
}
