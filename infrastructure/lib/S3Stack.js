import * as sst from "@serverless-stack/resources";
import * as cdk from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";
import {RemovalPolicy} from "@aws-cdk/core";

export default class S3Stack extends sst.Stack {

    bucket;

    constructor(scope, id, props) {
        super(scope, id, props);

        this.bucket = new s3.Bucket(this, "Uploads",
            {
                cors: [
                    {
                        maxAge: 3000,
                        allowedMethods: ["GET", "PUT", "POST", "DELETE", "HEAD"],
                        allowedHeaders: ["*"],
                        allowedOrigins: ["*"],
                    }
                ],
                removalPolicy: RemovalPolicy.DESTROY,
            });

        new cdk.CfnOutput(this, "AttachmentBucketName", {
            value: this.bucket.bucketName
        });

    }
}
