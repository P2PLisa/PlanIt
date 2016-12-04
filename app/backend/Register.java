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

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/register")
public class Register {

  // Helper function to add a new user.
  private static Map<String, AttributeValue> addUser(
  @RequestParam(value="user", required=true) String username,
  @RequestParam(value="password", required=true) String password,
  @RequestParam(value="email", required=true) String email) {

      User u = new User(0, username, "", email, password);
      UserServices.createUser(u);
      Map<String, AttributeValue> user = new HashMap<String, AttributeValue>();
      user.put("Username", new AttributeValue(username));
      user.put("Password", new AttributeValue(password));
      user.put("Email", new AttributeValue(email));
      user.put("Hash", new AttributeValue(u.hashCode()));

      return user;
  }

  public static void main(String[] args) throws Exception {
    DynamoDB dynamoDB = new DynamoDB(new AmazonDynamoDBClient(
    new ProfileCredentialsProvider()));

    Table table = dynamoDB.getTable("UserInfo");

    Map<String, AttributeValue> item = addUser(u);
    PutItemRequest putItemRequest = new PutItemRequest(table, item);
    PutItemResult putItemResult = dynamoDB.putItem(putItemRequest);

  }
}
