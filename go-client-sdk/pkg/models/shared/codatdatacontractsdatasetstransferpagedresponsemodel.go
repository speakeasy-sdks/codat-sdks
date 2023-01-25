package shared

// CodatDataContractsDatasetsTransferPagedResponseModel
// Used to represent what can be returned by an endpoint that supports paging.
// Usable with the [ProducesResponseType] attribute on a controller action.
type CodatDataContractsDatasetsTransferPagedResponseModel struct {
	Links        *CodatDataContractsDatasetsTransferPagedResponseLinksModel `json:"_links,omitempty"`
	PageNumber   *int32                                                     `json:"pageNumber,omitempty"`
	PageSize     *int32                                                     `json:"pageSize,omitempty"`
	Results      []CodatDataContractsDatasetsTransfer                       `json:"results,omitempty"`
	TotalResults *int32                                                     `json:"totalResults,omitempty"`
}
