import "source-map-support/register";
import { App } from "@aws-cdk/core";
import { CdkDemo } from "../lib/cdk-demo";

const app = new App();
const cloudFormationStackName = process.env.GU_CFN_STACK_NAME;
new CdkDemo(app, "CdkDemo", { stack: "deploy-tools", cloudFormationStackName });
