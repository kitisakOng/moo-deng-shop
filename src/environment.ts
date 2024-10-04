import { EnvironmentModel } from "./app/shared/models/environment.model";
import { getApplicationConfig } from "./app/shared/services/common.service";

export const environment: EnvironmentModel = {
  ...getApplicationConfig(),
};
