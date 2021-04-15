import * as sst from "@serverless-stack/resources";
import {CfnOutput, RemovalPolicy} from "@aws-cdk/core";
import * as dynamodb from "@aws-cdk/aws-dynamodb";

export default class DynamoDBStack extends sst.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);

        const app = this.node.root;

        const table = new dynamodb.Table(this, "Table", {
            billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
            sortKey: {name: "noteId", type: dynamodb.AttributeType.STRING},
            partitionKey: {name: "userId", type: dynamodb.AttributeType.STRING},
            removalPolicy: RemovalPolicy.DESTROY,
        })

        new CfnOutput(this, "TableName", {
            value: table.tableName,
            exportName: app.logicalPrefixedName("TableName"),
        });

        new CfnOutput(this, "TableArn", {
            value: table.tableArn,
            exportName: app.logicalPrefixedName("TableArn"),
        });


    }
}
