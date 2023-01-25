package shared

// CodatDataContractsDatasetsAccountPagedResponseModel
// Used to represent what can be returned by an endpoint that supports paging.
// Usable with the [ProducesResponseType] attribute on a controller action.
type CodatDataContractsDatasetsAccountPagedResponseModel struct {
	Links        *CodatDataContractsDatasetsAccountPagedResponseLinksModel `json:"_links,omitempty"`
	PageNumber   *int32                                                    `json:"pageNumber,omitempty"`
	PageSize     *int32                                                    `json:"pageSize,omitempty"`
	Results      []CodatDataContractsDatasetsAccount                       `json:"results,omitempty"`
	TotalResults *int32                                                    `json:"totalResults,omitempty"`
}
