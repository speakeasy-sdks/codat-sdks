import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceTaxComponentRef } from "./codatdatacontractsdatasetscommercetaxcomponentref";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsCommerceTaxComponentAllocation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxComponentRef" })
  @Type(() => CodatDataContractsDatasetsCommerceTaxComponentRef)
  taxComponentRef?: CodatDataContractsDatasetsCommerceTaxComponentRef;
}