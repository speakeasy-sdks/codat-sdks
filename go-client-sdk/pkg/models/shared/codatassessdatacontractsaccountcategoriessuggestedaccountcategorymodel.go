package shared

import (
	"time"
)

type CodatAssessDataContractsAccountCategoriesSuggestedAccountCategoryModel struct {
	DetailType   *string    `json:"detailType,omitempty"`
	ModifiedDate *time.Time `json:"modifiedDate,omitempty"`
	Subtype      *string    `json:"subtype,omitempty"`
	Type         *string    `json:"type,omitempty"`
}
