package shared

// CodatDataContractsDatasetsCommerceProductCategoryPagedResponseModel
// Used to represent what can be returned by an endpoint that supports paging.
// Usable with the [ProducesResponseType] attribute on a controller action.
type CodatDataContractsDatasetsCommerceProductCategoryPagedResponseModel struct {
	Links        *CodatDataContractsDatasetsCommerceProductCategoryPagedResponseLinksModel `json:"_links,omitempty"`
	PageNumber   *int                                                                      `json:"pageNumber,omitempty"`
	PageSize     *int                                                                      `json:"pageSize,omitempty"`
	Results      []CodatDataContractsDatasetsCommerceProductCategory                       `json:"results,omitempty"`
	TotalResults *int                                                                      `json:"totalResults,omitempty"`
}
