import DynamoDBStack from "./DynamoDBStack";
import S3Stack from "./S3Stack";
import CognitoStack from "./CognitoStack";

export default function main(app) {
    // Set default runtime for all functions
    app.setDefaultFunctionProps({
        runtime: "nodejs12.x"
    });

    new DynamoDBStack(app, "dynamodb");

    const s3 = new S3Stack(app, "s3");

    new CognitoStack(app, "cognito", { bucketArn: s3.bucket.bucketArn });
}
