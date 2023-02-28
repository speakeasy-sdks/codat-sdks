import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsFinancialsMetricsMetricPeriodError } from "./codatassessdatacontractsfinancialsmetricsmetricperioderror";
import { CodatAssessDataContractsFinancialsMetricsMetricPeriodInput } from "./codatassessdatacontractsfinancialsmetricsmetricperiodinput";
import { Expose, Transform, Type } from "class-transformer";


export class CodatAssessDataContractsFinancialsMetricsMetricPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatAssessDataContractsFinancialsMetricsMetricPeriodError })
  @Expose({ name: "errors" })
  @Type(() => CodatAssessDataContractsFinancialsMetricsMetricPeriodError)
  errors?: CodatAssessDataContractsFinancialsMetricsMetricPeriodError[];

  @SpeakeasyMetadata()
  @Expose({ name: "fromDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  fromDate?: Date;

  @SpeakeasyMetadata({ elemType: CodatAssessDataContractsFinancialsMetricsMetricPeriodInput })
  @Expose({ name: "inputs" })
  @Type(() => CodatAssessDataContractsFinancialsMetricsMetricPeriodInput)
  inputs?: CodatAssessDataContractsFinancialsMetricsMetricPeriodInput[];

  @SpeakeasyMetadata()
  @Expose({ name: "toDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  toDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: number;
}