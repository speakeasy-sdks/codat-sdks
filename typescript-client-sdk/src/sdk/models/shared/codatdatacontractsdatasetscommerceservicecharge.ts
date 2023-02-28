import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceServiceChargeTypeEnum } from "./codatdatacontractsdatasetscommerceservicechargetypeenum";
import { CodatDataContractsDatasetsCommerceTaxComponentAllocation } from "./codatdatacontractsdatasetscommercetaxcomponentallocation";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsCommerceServiceCharge extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxPercentage" })
  taxPercentage?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommerceTaxComponentAllocation })
  @Expose({ name: "taxes" })
  @Type(() => CodatDataContractsDatasetsCommerceTaxComponentAllocation)
  taxes?: CodatDataContractsDatasetsCommerceTaxComponentAllocation[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CodatDataContractsDatasetsCommerceServiceChargeTypeEnum;
}