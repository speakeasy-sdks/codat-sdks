package shared

type CodatDataContractsDatasetsAccountsReceivableTracking struct {
	CategoryRefs []CodatDataContractsDatasetsTrackingCategoryRef                `json:"categoryRefs"`
	CustomerRef  *CodatDataContractsDatasetsCustomerRef                         `json:"customerRef,omitempty"`
	IsBilledTo   CodatDataContractsDatasetsAccountsReceivableIsBilledToTypeEnum `json:"isBilledTo"`
	IsRebilledTo CodatDataContractsDatasetsAccountsReceivableIsBilledToTypeEnum `json:"isRebilledTo"`
	ProjectRef   *CodatDataContractsDatasetsProjectRef                          `json:"projectRef,omitempty"`
}
