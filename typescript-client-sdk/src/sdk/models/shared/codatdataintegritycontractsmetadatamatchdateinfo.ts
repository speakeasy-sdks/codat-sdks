import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CodatDataIntegrityContractsMetadataMatchDateInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxDate" })
  maxDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=maxOverlappingDate" })
  maxOverlappingDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=minDate" })
  minDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=minOverlappingDate" })
  minOverlappingDate?: Date;
}
