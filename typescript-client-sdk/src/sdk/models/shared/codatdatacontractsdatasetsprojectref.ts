import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatDataContractsDatasetsProjectRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}