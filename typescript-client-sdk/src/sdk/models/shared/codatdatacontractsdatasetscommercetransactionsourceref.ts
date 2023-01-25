import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceTransactionRefTypeEnum } from "./codatdatacontractsdatasetscommercetransactionreftypeenum";



export class CodatDataContractsDatasetsCommerceTransactionSourceRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CodatDataContractsDatasetsCommerceTransactionRefTypeEnum;
}
