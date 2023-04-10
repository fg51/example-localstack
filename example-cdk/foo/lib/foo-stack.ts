import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as lambda from "aws-cdk-lib/aws-lambda";

export class FooStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const hello = new lambda.Function(this, "HelloFunction", {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: "hello.handler",
      code: lambda.Code.fromAsset("lib/lambda"),
    });

    const apiGW = new apigateway.LambdaRestApi(this, "APIEndpoint", {
      handler: hello,
    });

    new cdk.CfnOutput(this, "APIGatewayEndPoint", {
      value:
        `http://localhost:4556/resapis/${apiGW.restApiId}/prod/_user_request_${apiGW.root.path}`,
    });

    // example resource
    // const queue = new sqs.Queue(this, 'FooQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
