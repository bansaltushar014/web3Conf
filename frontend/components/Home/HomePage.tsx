import React from 'react';
import {
    Flex, Box,
    Center,
    Stack,
    Heading,
    Text,
    Container,
} from '@chakra-ui/layout';
import { Card } from '@chakra-ui/react';
import WithSpeechBubbles from './Testimonial';
import Link from 'next/link';
import SocialProfile from './SocialProfile';
import RegisterMentor from '../PopUp/RegisterMentor';
import FeatureContent from './FeatureContent';


type HomePageProps = {

};



const HomePage: React.FC<HomePageProps> = () => {


    return (
        <Box backgroundColor={"brand.300"} p={10}>


           <FeatureContent/>
            {/* <Flex justifyContent={"space-around"} my={20} width={"50%"} mx={"25%"}>
                <Card p={2} backgroundColor={"brand.200"} width={"200px"} height={"80px"}>
                    <Stack alignItems={"center"} >

                        <Text> Join as</Text>

                        <Text fontSize={"25px"}>A Mentor</Text>
                    </Stack>
                </Card>
               
                <Link href={"../Modals/RegisterMenteeForm"}>
                    <Card p={2} backgroundColor={"brand.200"} width={"200px"} height={"80px"}>
                        <Stack alignItems={"center"} >

                            <Text> Join as</Text>

                            <Text fontSize={"25px"}>A Mentee</Text>
                        </Stack>
                    </Card>
                </Link>

            </Flex> */}
            <Box>
                <Heading color={"brand.100"}>Featured Mentors</Heading>
                <Flex justifyContent={"space-between"}>
                    <SocialProfile /><SocialProfile /><SocialProfile />
                    <SocialProfile />
                </Flex>
            </Box>
            <Heading my={5} color={"brand.100"}>Testimonials </Heading>
            <WithSpeechBubbles />

        </Box>
    )
}


export default HomePage;



