# @guardian/cdk demo!

Let's get started.

_Tip: each stage below is stored as a corresponding git tag, so you can check
those out if you get stuck or want to skip ahead._

## 1. Prepare your AWS account

@guardian/cdk patterns rely on certain Parameter Store values to be set, for
example, an account's primary VPC. To ensure your account meets the
prerequisites here, run:

    $ npx @guardian/cdk account-readiness --profile [profile] --region eu-west-1

Add any missing parameters as required.

## 2. Initialise your CDK app

Next, create the core CDK files for your app:

    $ npx @guardian/cdk new --app [app] --stack [stack] --yaml-template-location cfn.yaml

Use the `--help` flag for more info on these and other flags.

## 3. Diff again your existing stack

_Note, this stage will only work for this demo if you have a real Cloudformation
stack with the template in `cfn.yaml`. You can do this quickly in the AWS
Console or alternatively, skip this step for now._

Confirm that your CDK template is not materially different from your existing
PROD stack by running:

    $ cd cdk
    $ ./script/diff -s [AWS stack name] -p [profile]

## 4. Migrate resources into CDK and delete old app

_Tip: for higher-risk or more complex applications, you may want to 'dual-stack'
for a while to gain confidence in the new infrastructure before deleting the
old._

Use `GuBucket` to recreate the bucket in `lib/cdk-demo.ts`. You can then deploy
to AWS (if you like) and delete the `cfn.yaml` file.
