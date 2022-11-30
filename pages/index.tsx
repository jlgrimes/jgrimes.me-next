import { Heading, Stack, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Stack justifyContent='center' alignItems='center'>
      <Stack spacing='8' paddingTop='200' paddingLeft='16'>
        <Heading
          margin='0'
          lineHeight='5rem'
          color='#2D3748'
          fontSize='5rem'
        >{`Hi, I'm Jared.`}</Heading>
        <Heading
          color='#4A5568'
          size='2xl'
          as='h1'
        >{`There's nothing here. We're working on it. 🚧`}</Heading>
      </Stack>
    </Stack>
  );
}
