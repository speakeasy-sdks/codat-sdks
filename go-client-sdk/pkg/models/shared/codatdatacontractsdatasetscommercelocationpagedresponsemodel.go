package shared

// CodatDataContractsDatasetsCommerceLocationPagedResponseModel
// Used to represent what can be returned by an endpoint that supports paging.
// Usable with the [ProducesResponseType] attribute on a controller action.
type CodatDataContractsDatasetsCommerceLocationPagedResponseModel struct {
	Links        *CodatDataContractsDatasetsCommerceLocationPagedResponseLinksModel `json:"_links,omitempty"`
	PageNumber   *int                                                               `json:"pageNumber,omitempty"`
	PageSize     *int                                                               `json:"pageSize,omitempty"`
	Results      []CodatDataContractsDatasetsCommerceLocation                       `json:"results,omitempty"`
	TotalResults *int                                                               `json:"totalResults,omitempty"`
}
