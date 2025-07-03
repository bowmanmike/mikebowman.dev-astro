import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import Pagination from '../Pagination.astro';

interface Props {
  currentPage: number;
  totalPages: number;
  base: string;
}

async function renderComponent(props: Props) {
  const container = await AstroContainer.create();

  return await container.renderToString(Pagination, {
    props: props,
  });
}

describe('Pagination Component', async () => {
  test('Pagination Renders', async () => {
    const result = await renderComponent({});

    expect(result).toContain('1');
  });
});
