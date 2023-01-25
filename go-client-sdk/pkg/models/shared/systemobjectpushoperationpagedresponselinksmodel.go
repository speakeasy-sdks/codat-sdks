package shared

type SystemObjectPushOperationPagedResponseLinksModel struct {
	Current  *SystemObjectPushOperationPagedResponseHrefModel `json:"current,omitempty"`
	Next     *SystemObjectPushOperationPagedResponseHrefModel `json:"next,omitempty"`
	Previous *SystemObjectPushOperationPagedResponseHrefModel `json:"previous,omitempty"`
	Self     *SystemObjectPushOperationPagedResponseHrefModel `json:"self,omitempty"`
}
