import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsWebLinkTypeEnum } from "./codatdatacontractsdatasetsweblinktypeenum";


export class CodatDataContractsDatasetsWebLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CodatDataContractsDatasetsWebLinkTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}