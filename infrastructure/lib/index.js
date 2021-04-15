import DynamoDBStack from "./DynamoDBStack";
import S3Stack from "./S3Stack";

export default function main(app) {
    // Set default runtime for all functions
    app.setDefaultFunctionProps({
        runtime: "nodejs12.x"
    });

    new DynamoDBStack(app, "dynamodb");

    new S3Stack(app, "s3");
}
