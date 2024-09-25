import { AppendBlockChildrenParameters, CreatePageParameters } from '@notionhq/client/build/src/api-endpoints';
import { calloutPageConfig, simplePageConfig } from '../configs';
import { AddBlockProps, BlockType, PageConfigType } from '../models';
import { Client } from '@notionhq/client';
import { getBlockConfig } from '../utils';

const { NOTION_INTEGRATION_SECRET } = process.env;

const notionInit = () => {
  let notion = null;
  if (!notion) {
    notion = new Client({
      auth: NOTION_INTEGRATION_SECRET,
    });
  }
  return notion;
};

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
  const notion = notionInit();

  const page = await notion.pages.create({
    ...pageConfig,
  });
  return page;
};

export const addBlockHelper = async ({ pageId, type, text }: AddBlockProps) => {
  const notion = notionInit();

  let blockConfig: AppendBlockChildrenParameters = { block_id: pageId, children: [getBlockConfig(type, text!)] };

  const block = await notion.blocks.children.append(blockConfig);

  return block;
};
