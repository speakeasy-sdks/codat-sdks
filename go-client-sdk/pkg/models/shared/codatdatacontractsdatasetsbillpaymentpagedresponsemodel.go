package shared

// CodatDataContractsDatasetsBillPaymentPagedResponseModel
// Used to represent what can be returned by an endpoint that supports paging.
// Usable with the [ProducesResponseType] attribute on a controller action.
type CodatDataContractsDatasetsBillPaymentPagedResponseModel struct {
	Links        *CodatDataContractsDatasetsBillPaymentPagedResponseLinksModel `json:"_links,omitempty"`
	PageNumber   *int                                                          `json:"pageNumber,omitempty"`
	PageSize     *int                                                          `json:"pageSize,omitempty"`
	Results      []CodatDataContractsDatasetsBillPayment                       `json:"results,omitempty"`
	TotalResults *int                                                          `json:"totalResults,omitempty"`
}
