// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const env = "externalexec";
const DEBUG = true;
const apiEnv = "api"
export const environment = {
  DEBUG: DEBUG,
  environmentName: env.toUpperCase(),
  baseURL: "https://" + env + ".thrivetrm.party/",
  apiUrl: "https://" + apiEnv + ".thrivetrm.party/api/v2/",
  token: "fBs55CGgcRE4dTQX3bN4828z",
  email: "qatesting+19@thrivetrm.com",
  password: "mail_123",
};
