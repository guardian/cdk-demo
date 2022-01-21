import type { App } from "@aws-cdk/core";
import type { GuStackProps } from "@guardian/cdk/lib/constructs/core";
import { GuStack } from "@guardian/cdk/lib/constructs/core";
import { GuS3Bucket } from "@guardian/cdk/lib/constructs/s3";

export class CdkDemo extends GuStack {
  migratedFromCloudFormation = true;

  constructor(scope: App, id: string, props: GuStackProps) {
    super(scope, id, props);

    new GuS3Bucket(this, "bucket", {
      app: "cdk-demo",
      versioned: true,
      existingLogicalId: {
        logicalId: "MyFirstBucket",
        reason: "To illustrate 'adoption' of a resource into CDK.",
      },
    });
  }
}
