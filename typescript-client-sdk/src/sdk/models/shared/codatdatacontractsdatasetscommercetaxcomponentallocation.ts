import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceTaxComponentRef } from "./codatdatacontractsdatasetscommercetaxcomponentref";



export class CodatDataContractsDatasetsCommerceTaxComponentAllocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=taxComponentRef" })
  taxComponentRef?: CodatDataContractsDatasetsCommerceTaxComponentRef;
}
