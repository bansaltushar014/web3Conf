import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import RegisterMentor from '../PopUp/RegisterMentor';
import ScheduleCall from '../PopUp/ScheduleCall';

export default function SocialProfile() {
    return (
        <Center py={6}>
            <Box
                maxW={'300px'}
                w={'300px'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Image
                    h={'70px'}
                    w={'full'}
                    src={
                        'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                    }
                    objectFit={'cover'}
                />
                <Flex justify={'center'} mt={-12}>
                    <Avatar
                        size={'xl'}
                        src={
                            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                        }

                        css={{
                            border: '2px solid white',
                        }}
                    />
                </Flex>

                <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            John Doe
                        </Heading>
                        <Text color={'gray.500'}>Frontend Developer</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>23</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Mentorships
                            </Text>
                        </Stack>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>4.5</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Rating
                            </Text>
                        </Stack>
                    </Stack>

                    <Box ml={12} mt={2}>
                        <ScheduleCall price={5} />
                    </Box>

                </Box>
            </Box>
        </Center>
    );
}