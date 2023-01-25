package shared

// CodatDataContractsDatasetsPaymentMethodPagedResponseModel
// Used to represent what can be returned by an endpoint that supports paging.
// Usable with the [ProducesResponseType] attribute on a controller action.
type CodatDataContractsDatasetsPaymentMethodPagedResponseModel struct {
	Links        *CodatDataContractsDatasetsPaymentMethodPagedResponseLinksModel `json:"_links,omitempty"`
	PageNumber   *int32                                                          `json:"pageNumber,omitempty"`
	PageSize     *int32                                                          `json:"pageSize,omitempty"`
	Results      []CodatDataContractsDatasetsPaymentMethod                       `json:"results,omitempty"`
	TotalResults *int32                                                          `json:"totalResults,omitempty"`
}
