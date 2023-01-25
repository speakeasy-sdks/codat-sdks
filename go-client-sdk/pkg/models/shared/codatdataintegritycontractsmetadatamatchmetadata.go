package shared

type CodatDataIntegrityContractsMetadataMatchMetadata struct {
	Amounts       *CodatDataIntegrityContractsMetadataMatchAmountInfo    `json:"amounts,omitempty"`
	ConnectionIds *CodatDataIntegrityContractsMetadataMatchConnectionIds `json:"connectionIds,omitempty"`
	Dates         *CodatDataIntegrityContractsMetadataMatchDateInfo      `json:"dates,omitempty"`
	StatusInfo    *CodatDataIntegrityContractsMetadataMatchStatusInfo    `json:"statusInfo,omitempty"`
	Type          *string                                                `json:"type,omitempty"`
}
