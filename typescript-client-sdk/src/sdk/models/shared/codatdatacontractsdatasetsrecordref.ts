import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CodatDataContractsDatasetsRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
