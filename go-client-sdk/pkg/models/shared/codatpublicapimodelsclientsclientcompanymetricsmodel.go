package shared

type CodatPublicAPIModelsClientsClientCompanyMetricsModel struct {
	AllTimeLinked   *int `json:"allTimeLinked,omitempty"`
	CurrentlyLinked *int `json:"currentlyLinked,omitempty"`
	NoLongerLinked  *int `json:"noLongerLinked,omitempty"`
	NotYetLinked    *int `json:"notYetLinked,omitempty"`
}
