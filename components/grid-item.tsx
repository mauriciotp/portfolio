import NextLink from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { ReactNode } from 'react';

type WorkGridItemProps = {
  children: ReactNode;
  id: string;
  title: string;
  thumbnail: StaticImageData;
};

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail,
}: WorkGridItemProps) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/projetos/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`projetos/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
