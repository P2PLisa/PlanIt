import java.util.HashMap;
import java.util.Map;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.profile.ProfileCredentialsProvider;
import com.amazonaws.regions.Region;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient;
import com.amazonaws.services.dynamodbv2.model.AttributeDefinition;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.ComparisonOperator;
import com.amazonaws.services.dynamodbv2.model.Condition;
import com.amazonaws.services.dynamodbv2.model.CreateTableRequest;
import com.amazonaws.services.dynamodbv2.model.DescribeTableRequest;
import com.amazonaws.services.dynamodbv2.model.KeySchemaElement;
import com.amazonaws.services.dynamodbv2.model.KeyType;
import com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput;
import com.amazonaws.services.dynamodbv2.model.PutItemRequest;
import com.amazonaws.services.dynamodbv2.model.PutItemResult;
import com.amazonaws.services.dynamodbv2.model.ScalarAttributeType;
import com.amazonaws.services.dynamodbv2.model.ScanRequest;
import com.amazonaws.services.dynamodbv2.model.ScanResult;
import com.amazonaws.services.dynamodbv2.model.TableDescription;
import com.amazonaws.services.dynamodbv2.util.TableUtils;

public class Register {

  // Helper function to add a new user.
  public void addUser(User user) {

      Map<String, AttributeValue> user = new HashMap<String, AttributeValue>();
      user.put("Username", new AttributeValue(user.getUsername()));
      user.put("Password", new AttributeValue(user.getPassword()));
      user.put("Email", new AttributeValue(user.getEmail()));
      user.put("Hash", new AttributeValue(user.hashCode()));

      DynamoDB dynamoDB = new DynamoDB(new AmazonDynamoDBClient(
      new ProfileCredentialsProvider()));

      Table table = dynamoDB.getTable("UserInfo");
      PutItemRequest putItemRequest = new PutItemRequest(table, user);
      PutItemResult putItemResult = dynamoDB.putItem(putItemRequest);

  }
}
