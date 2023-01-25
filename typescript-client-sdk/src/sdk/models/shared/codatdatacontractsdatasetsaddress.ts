import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsAddressTypeEnum } from "./codatdatacontractsdatasetsaddresstypeenum";



export class CodatDataContractsDatasetsAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=line1" })
  line1?: string;

  @SpeakeasyMetadata({ data: "json, name=line2" })
  line2?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CodatDataContractsDatasetsAddressTypeEnum;
}
