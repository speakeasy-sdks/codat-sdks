import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAccountRef } from "./codatdatacontractsdatasetsaccountref";
import { CodatDataContractsDatasetsAccountsPayableTracking } from "./codatdatacontractsdatasetsaccountspayabletracking";
import { CodatDataContractsDatasetsItemRef } from "./codatdatacontractsdatasetsitemref";
import { CodatDataContractsDatasetsTaxRateRef } from "./codatdatacontractsdatasetstaxrateref";
import { CodatDataContractsDatasetsTrackingCategoryRef } from "./codatdatacontractsdatasetstrackingcategoryref";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsBillCreditNoteLineItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => CodatDataContractsDatasetsAccountRef)
  accountRef?: CodatDataContractsDatasetsAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "discountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "itemRef" })
  @Type(() => CodatDataContractsDatasetsItemRef)
  itemRef?: CodatDataContractsDatasetsItemRef;

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity: number;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "taxRateRef" })
  @Type(() => CodatDataContractsDatasetsTaxRateRef)
  taxRateRef?: CodatDataContractsDatasetsTaxRateRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => CodatDataContractsDatasetsAccountsPayableTracking)
  tracking?: CodatDataContractsDatasetsAccountsPayableTracking;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsTrackingCategoryRef })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => CodatDataContractsDatasetsTrackingCategoryRef)
  trackingCategoryRefs?: CodatDataContractsDatasetsTrackingCategoryRef[];

  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount: number;
}