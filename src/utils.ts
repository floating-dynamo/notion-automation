import { CreatePageParameters } from '@notionhq/client/build/src/api-endpoints';
import { Client } from '@notionhq/client';

const { NOTION_INTEGRATION_SECRET } = process.env;

// Initializing a client
const notion = new Client({
  auth: NOTION_INTEGRATION_SECRET,
});

export async function getUserId(username: string) {
  try {
    const response = await notion.users.list({});
    const users = response.results;

    console.log(users);

    // Find your user in the list
    const currentUser = users.find((user) => user.name === username);

    if (currentUser) {
      console.log('Your Notion UUID:', currentUser.id);
      return currentUser.id;
    } else {
      console.log('User not found');
    }
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}
