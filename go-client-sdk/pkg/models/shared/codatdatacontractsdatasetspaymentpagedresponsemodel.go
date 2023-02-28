package shared

// CodatDataContractsDatasetsPaymentPagedResponseModel
// Used to represent what can be returned by an endpoint that supports paging.
// Usable with the [ProducesResponseType] attribute on a controller action.
type CodatDataContractsDatasetsPaymentPagedResponseModel struct {
	Links        *CodatDataContractsDatasetsPaymentPagedResponseLinksModel `json:"_links,omitempty"`
	PageNumber   *int                                                      `json:"pageNumber,omitempty"`
	PageSize     *int                                                      `json:"pageSize,omitempty"`
	Results      []CodatDataContractsDatasetsPayment                       `json:"results,omitempty"`
	TotalResults *int                                                      `json:"totalResults,omitempty"`
}
