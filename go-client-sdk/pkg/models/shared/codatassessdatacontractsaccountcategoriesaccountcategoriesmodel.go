package shared

type CodatAssessDataContractsAccountCategoriesAccountCategoriesModel struct {
	AccountRef *CodatAssessDataContractsAccountCategoriesAccountRefModel               `json:"accountRef,omitempty"`
	Confirmed  *CodatAssessDataContractsAccountCategoriesConfirmedAccountCategoryModel `json:"confirmed,omitempty"`
	Suggested  *CodatAssessDataContractsAccountCategoriesSuggestedAccountCategoryModel `json:"suggested,omitempty"`
}
