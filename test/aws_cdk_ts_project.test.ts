import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as  AwsCdkTsProjectStack from '../lib/aws_cdk_ts_project-stack';

test('My First Stack Created', () => {
    const app = new cdk.App();
    const stack = new AwsCdkTsProjectStack.AwsCdkTsProjectStack(app, 'MyTestStack');
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::Lambda::Function', {
        FunctionName: 'first-cdk-lambda',
        Runtime: 'nodejs16.x',
        Handler: 'index.handler',
        MemorySize: 128,
    });
});
