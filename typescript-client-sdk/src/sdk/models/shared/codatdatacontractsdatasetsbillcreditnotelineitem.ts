import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsAccountRef } from "./codatdatacontractsdatasetsaccountref";
import { CodatDataContractsDatasetsItemRef } from "./codatdatacontractsdatasetsitemref";
import { CodatDataContractsDatasetsTaxRateRef } from "./codatdatacontractsdatasetstaxrateref";
import { CodatDataContractsDatasetsAccountsPayableTracking } from "./codatdatacontractsdatasetsaccountspayabletracking";
import { CodatDataContractsDatasetsTrackingCategoryRef } from "./codatdatacontractsdatasetstrackingcategoryref";



export class CodatDataContractsDatasetsBillCreditNoteLineItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: CodatDataContractsDatasetsAccountRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=itemRef" })
  itemRef?: CodatDataContractsDatasetsItemRef;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: number;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: CodatDataContractsDatasetsTaxRateRef;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=tracking" })
  tracking?: CodatDataContractsDatasetsAccountsPayableTracking;

  @SpeakeasyMetadata({ data: "json, name=trackingCategoryRefs", elemType: CodatDataContractsDatasetsTrackingCategoryRef })
  trackingCategoryRefs?: CodatDataContractsDatasetsTrackingCategoryRef[];

  @SpeakeasyMetadata({ data: "json, name=unitAmount" })
  unitAmount: number;
}
