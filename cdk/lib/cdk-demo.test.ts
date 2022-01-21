import "@aws-cdk/assert/jest";
import { SynthUtils } from "@aws-cdk/assert";
import { App } from "@aws-cdk/core";
import { CdkDemo } from "./cdk-demo";

describe("The CdkDemo stack", () => {
  it("matches the snapshot", () => {
    const app = new App();
    const stack = new CdkDemo(app, "CdkDemo", { stack: "deploy-tools" });
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
  });
});
