import { motion, isValidMotionProp } from 'framer-motion';
import { chakra } from '@chakra-ui/react';
import { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  delay: number;
};

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return isValidMotionProp(prop) || prop === 'children';
  },
});

const Section = ({ children, delay = 0 }: SectionProps) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    // @ts-ignore no problem in operation, although type error appears.
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </StyledDiv>
);

export default Section;
