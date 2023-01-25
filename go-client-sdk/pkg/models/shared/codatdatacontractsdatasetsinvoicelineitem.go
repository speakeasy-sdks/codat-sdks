package shared

type CodatDataContractsDatasetsInvoiceLineItem struct {
	AccountRef           *CodatDataContractsDatasetsAccountRef                 `json:"accountRef,omitempty"`
	Description          *string                                               `json:"description,omitempty"`
	DiscountAmount       *float64                                              `json:"discountAmount,omitempty"`
	DiscountPercentage   *float64                                              `json:"discountPercentage,omitempty"`
	IsDirectIncome       *bool                                                 `json:"isDirectIncome,omitempty"`
	ItemRef              *CodatDataContractsDatasetsItemRef                    `json:"itemRef,omitempty"`
	Quantity             float64                                               `json:"quantity"`
	SubTotal             *float64                                              `json:"subTotal,omitempty"`
	TaxAmount            *float64                                              `json:"taxAmount,omitempty"`
	TaxRateRef           *CodatDataContractsDatasetsTaxRateRef                 `json:"taxRateRef,omitempty"`
	TotalAmount          *float64                                              `json:"totalAmount,omitempty"`
	Tracking             *CodatDataContractsDatasetsAccountsReceivableTracking `json:"tracking,omitempty"`
	TrackingCategoryRefs []CodatDataContractsDatasetsTrackingCategoryRef       `json:"trackingCategoryRefs,omitempty"`
	UnitAmount           float64                                               `json:"unitAmount"`
}
