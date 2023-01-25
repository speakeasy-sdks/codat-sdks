package shared

type CodatDataContractsDatasetsAccountsPayableTracking struct {
	CategoryRefs []CodatDataContractsDatasetsTrackingCategoryRef             `json:"categoryRefs"`
	CustomerRef  *CodatDataContractsDatasetsCustomerRef                      `json:"customerRef,omitempty"`
	IsBilledTo   CodatDataContractsDatasetsAccountsPayableIsBilledToTypeEnum `json:"isBilledTo"`
	IsRebilledTo CodatDataContractsDatasetsAccountsPayableIsBilledToTypeEnum `json:"isRebilledTo"`
	ProjectRef   *CodatDataContractsDatasetsProjectRef                       `json:"projectRef,omitempty"`
}
