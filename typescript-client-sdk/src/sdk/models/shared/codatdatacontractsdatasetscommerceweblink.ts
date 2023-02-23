import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceWebLinkTypeEnum } from "./codatdatacontractsdatasetscommerceweblinktypeenum";


export class CodatDataContractsDatasetsCommerceWebLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CodatDataContractsDatasetsCommerceWebLinkTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}