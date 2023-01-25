import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CodatDataContractsDatasetsCommerceDiscountAllocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;
}
