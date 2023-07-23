import { Flex, Box } from '@chakra-ui/layout';
// import { Box } from '@chakra-ui/react/dist';
import React from 'react';
import { Button, Input, Link, Text, Heading } from '@chakra-ui/react'
import JoinMentor from '../PopUp/JoinMentor';


type NavbarProps = {

    user: any,
    handleLogIn: () => void,
    handleLogOut: () => void,
};

const Navbar: React.FC<NavbarProps> = (props) => {

    return (

        <Flex backgroundColor={"brand.100"} height={"65px"} justifyContent={"flex-end"} p={3}>
            <Heading mr={"60%"} color={"white"}>FlowMentor</Heading>
            {props.user.addr ? props.user.addr : ""}
            <Link href="/Meets"><Button

                bg={"black"}
                color={'white'}
                fontSize={"15"}
                rounded={'md'}
                _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                }}

            >View My Meets</Button></Link>

            <JoinMentor />
            {props.user.addr ? <Button fontSize={"15"}
                rounded={'md'} onClick={props.handleLogOut}>Log Out</Button> :
                <Button fontSize={"15"}
                    rounded={'md'} onClick={props.handleLogIn}>Log In</Button>
            }



        </Flex>
    )
}
export default Navbar;