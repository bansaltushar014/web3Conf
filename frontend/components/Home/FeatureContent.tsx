import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function SplitScreen() {
    return (
        <Stack minH={'90vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: useBreakpointValue({ base: '20%', md: '30%' }),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'blue.400',
                                zIndex: -1,
                            }}>
                            Decentralized                        </Text>
                        <br />{' '}
                        <Text color={'brand.200'} as={'span'}>
                            Mentorship Platform                        </Text>{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black.400'}>
                        Find your Mentors at one place. Book 1:1 Sessions with all the elite mentors and boost your Project
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>

                        <Button
                            color={'white'}
                            fontSize={"15"}
                            rounded={'md'}
                            _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                            }}
                        >
                            <Link href={"/Mentors"}>View Mentors</Link>
                        </Button>

                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    height={'80vh'}
                    src={
                        'https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
                    }
                />
            </Flex>
        </Stack>
    );
}