package shared

type CodatDataContractsPushPushOperationChange struct {
	AttachmentID *string                                       `json:"attachmentId,omitempty"`
	RecordRef    *CodatDataContractsPushPushOperationRecordRef `json:"recordRef,omitempty"`
	Type         *CodatDataContractsPushPushChangeTypeEnum     `json:"type,omitempty"`
}
