import { CreatePageParameters } from '@notionhq/client/build/src/api-endpoints';
import { calloutPageConfig, simplePageConfig } from '../configs';
import { PageConfigType } from '../models';
import { Client } from '@notionhq/client';

const { NOTION_INTEGRATION_SECRET } = process.env;

export const pageConfigHelper = (type: PageConfigType, config?: any) => {
  switch (type) {
    case PageConfigType.SIMPLE_PAGE:
      return simplePageConfig();
    case PageConfigType.CALLOUT_PAGE:
      return calloutPageConfig(config);
    default:
      return simplePageConfig();
  }
};

export const createPageHelper = async (pageConfig: CreatePageParameters) => {
  let notion = null;
  if (!notion)
    notion = new Client({
      auth: NOTION_INTEGRATION_SECRET,
    });

  const page = await notion.pages.create({
    ...pageConfig,
  });
  return page;
};
