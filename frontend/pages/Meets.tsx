import { Heading } from '@chakra-ui/react';
import React from 'react';
import { useEffect, useState } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Center, Box
} from '@chakra-ui/react'
import ReScheduleCall from '@/components/PopUp/RescheduleCall';
import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";

type MeetsProps = {

};


fcl.config({
	//Emulator
	"accessNode.api": "http://localhost:8888",
	"app.detail.title": "Sharayu's Flow Wallet",

	//wallet to interact with emulator
	"discovery.wallet": "http://localhost:8701/fcl/authn",
	"0xMentorMentee": "0xf8d6e0586b0a20c7",
});


const Meets: React.FC<MeetsProps> = () => {

	const [date, setdate] = useState("20th July, 2 PM");
	const [accept, setaccept] = useState("accept");

    const handleReschedule = () => { }
    const handleCancel = () => { }

    const updatetime = () => {
        setdate("21st July, 2 PM");
    }

    const acceptfun = async () => {
        const txId = await fcl.send([
			fcl.transaction`    
      import MentorMentee from 0xMentorMentee
      transaction(id: Int, name: String) {

        prepare(acc: AuthAccount) {}
      
        execute {
          MentorMentee.confirmMeeting(id: id, name: name)
        }
      }
      `,
			fcl.args([fcl.arg(0, t.Int), fcl.arg("emily", t.String)]),
			fcl.proposer(fcl.authz),
			fcl.payer(fcl.authz),
			fcl.authorizations([fcl.authz]),
		]);
        setaccept("accepted")
    }

    return (<Box >
        <Center mt={10}>
            <Heading>Scheduled Meets</Heading>
        </Center>

        <Center > <TableContainer bg="gray.200" border={"1px solid gray"} mt={10} rounded={'md'}>
            <Table variant='simple'>
                <TableCaption>Scheduled Meets

                </TableCaption>
                <Thead>
                    <Tr>
                        <Th>Scheduled time</Th>
                        <Th>Mentor</Th>
                        <Th>Mentee</Th>
                        <Th>Hour</Th>
                        <Th>Total Price</Th>
                        <Th>Reschedule</Th>
                        <Th> Accept</Th>
                        <Th> Cancel</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>{date}</Td>
                        <Td> Emily</Td>
                        <Td> Tushar </Td>
                        <Td>1</Td>
                        <Td>100</Td>
                        <Td><ReScheduleCall updatetime={updatetime}/></Td>
                        <Td><Button fontSize={"15"}
                            rounded={'md'} bg={'blue.500'}  _hover={{bg:"red.700"}}
                            onClick={acceptfun}> {accept}</Button></Td>
                        <Td><Button fontSize={"15"}
                            rounded={'md'} bg={'red.500'}  _hover={{bg:"red.700"}}
                            onClick={handleCancel}> Cancel</Button></Td>
                    </Tr>

                </Tbody>

            </Table>
        </TableContainer></Center>





    </Box>)
}
export default Meets;