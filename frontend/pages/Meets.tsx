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
import { ethers } from "ethers";

type MeetsProps = {

};


const Meets: React.FC<MeetsProps> = () => {

	const [date, setdate] = useState("20th July, 2 PM");
	const [accept, setaccept] = useState("accept");

    const handleReschedule = () => { }
    const handleCancel = () => { }

    const updatetime = () => {
        setdate("21st July, 2 PM");
    }

    const reqestAccount = async () => {
		console.log("Request Account .....");
		if (window.ethereum) {
			console.log("detected!");
			try {
				const accounts = await window.ethereum.request({
					method: "eth_requestAccounts",
				});
				console.log(accounts);
			} catch (error) {
				console.log("Error connecting!");
			}
		} else {
			alert("Meta Mask not detected!");
		}
	};

    const acceptfun = async () => {
        const abi = [
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "meetingId",
                        "type": "uint256"
                    }
                ],
                "name": "cancelItByMentee",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "meetingId",
                        "type": "uint256"
                    }
                ],
                "name": "cancelItByMentor",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "meetingId",
                        "type": "uint256"
                    }
                ],
                "name": "confirmMeeting",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "meetingId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "rating",
                        "type": "uint256"
                    }
                ],
                "name": "giveFeedback",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "meetingId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "meetingSchedule",
                        "type": "string"
                    }
                ],
                "name": "reschedule",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "mentorName",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "service",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "meetingSchedule",
                        "type": "string"
                    }
                ],
                "name": "setMeeting",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_id",
                        "type": "uint256"
                    }
                ],
                "name": "getMeetingDetails",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "menteeName",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "mentorName",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "service",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "currentTimeStamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "meetingSchedule",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "meetingStatus",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "respectiveMentor",
                        "type": "address"
                    }
                ],
                "name": "getRating",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ];
        if(typeof window.ethereum !== 'undefined'){
            await reqestAccount();
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            console.log(provider)
            const signer = provider.getSigner()
            // const daiContract = new ethers.Contract('0xfF53CAC17fa075C982df0cEe09524dD1715f0505', abi, provider);   
            // const daiContractWithSigner = daiContract.connect(signer);
            // daiContractWithSigner.reschedule("1", "45678987");

        }
        // onClose()
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