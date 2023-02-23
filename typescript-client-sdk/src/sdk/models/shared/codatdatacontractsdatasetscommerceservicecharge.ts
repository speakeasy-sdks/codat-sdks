import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceServiceChargeTypeEnum } from "./codatdatacontractsdatasetscommerceservicechargetypeenum";
import { CodatDataContractsDatasetsCommerceTaxComponentAllocation } from "./codatdatacontractsdatasetscommercetaxcomponentallocation";


export class CodatDataContractsDatasetsCommerceServiceCharge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=taxPercentage" })
  taxPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=taxes", elemType: CodatDataContractsDatasetsCommerceTaxComponentAllocation })
  taxes?: CodatDataContractsDatasetsCommerceTaxComponentAllocation[];

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CodatDataContractsDatasetsCommerceServiceChargeTypeEnum;
}