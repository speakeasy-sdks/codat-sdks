package shared

type CodatPublicAPIModelsClientsClientCompanyMetricsModel struct {
	AllTimeLinked   *int32 `json:"allTimeLinked,omitempty"`
	CurrentlyLinked *int32 `json:"currentlyLinked,omitempty"`
	NoLongerLinked  *int32 `json:"noLongerLinked,omitempty"`
	NotYetLinked    *int32 `json:"notYetLinked,omitempty"`
}
