package shared

// CodatDataContractsDatasetsCommerceLocationPagedResponseModel
// Used to represent what can be returned by an endpoint that supports paging.
// Usable with the [ProducesResponseType] attribute on a controller action.
type CodatDataContractsDatasetsCommerceLocationPagedResponseModel struct {
	Links        *CodatDataContractsDatasetsCommerceLocationPagedResponseLinksModel `json:"_links,omitempty"`
	PageNumber   *int32                                                             `json:"pageNumber,omitempty"`
	PageSize     *int32                                                             `json:"pageSize,omitempty"`
	Results      []CodatDataContractsDatasetsCommerceLocation                       `json:"results,omitempty"`
	TotalResults *int32                                                             `json:"totalResults,omitempty"`
}
