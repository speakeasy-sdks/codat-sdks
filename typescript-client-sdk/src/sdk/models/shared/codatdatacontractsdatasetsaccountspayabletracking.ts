import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAccountsPayableIsBilledToTypeEnum } from "./codatdatacontractsdatasetsaccountspayableisbilledtotypeenum";
import { CodatDataContractsDatasetsCustomerRef } from "./codatdatacontractsdatasetscustomerref";
import { CodatDataContractsDatasetsProjectRef } from "./codatdatacontractsdatasetsprojectref";
import { CodatDataContractsDatasetsTrackingCategoryRef } from "./codatdatacontractsdatasetstrackingcategoryref";


export class CodatDataContractsDatasetsAccountsPayableTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryRefs", elemType: CodatDataContractsDatasetsTrackingCategoryRef })
  categoryRefs: CodatDataContractsDatasetsTrackingCategoryRef[];

  @SpeakeasyMetadata({ data: "json, name=customerRef" })
  customerRef?: CodatDataContractsDatasetsCustomerRef;

  @SpeakeasyMetadata({ data: "json, name=isBilledTo" })
  isBilledTo: CodatDataContractsDatasetsAccountsPayableIsBilledToTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=isRebilledTo" })
  isRebilledTo: CodatDataContractsDatasetsAccountsPayableIsBilledToTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=projectRef" })
  projectRef?: CodatDataContractsDatasetsProjectRef;
}