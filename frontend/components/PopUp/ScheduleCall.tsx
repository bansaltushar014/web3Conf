import { Box, Button, Flex, FormLabel, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, useColorModeValue, ModalFooter, ModalOverlay, Stack, Text, Textarea, useDisclosure, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ethers } from "ethers";


type ScheduleCallProps = {
    //Wallet adddress of mentee

    // open: boolean;

    // //callback function that doesn't return anything
    // handleClose: () => void;
    price: number;
};




const ScheduleCall: React.FC<ScheduleCallProps> = (props) => {

    const [hour, setHour] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [date, setDate] = useState("");

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);
    //TO-DO
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // const { error } = "hi";

        let error = true;

        if (error) {
            console.log(error);
            setShowSuccessMessage(false);
            setShowFailureMessage(true);

            return;
        }

        setShowSuccessMessage(true);
        setShowFailureMessage(false);


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

    const schedule = async () => {
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
            const daiContract = new ethers.Contract('0xfF53CAC17fa075C982df0cEe09524dD1715f0505', abi, provider);   
            const daiContractWithSigner = daiContract.connect(signer);
            daiContractWithSigner.setMeeting("0x1F53959B76C4d7851078b580dC869e8712310492", "100", "Finance ", "2345678");

        }
        onClose()
    }

    // const setValuesForMeeting = () => {
	// 	setMenteeName("tushar");
	// 	setMentorName("raju");
	// 	setPrice("99245");
	// 	setService("blockchain");
	// 	setCurrentTimestamp("1323124");
	// 	setMeetingSchedule("234565");
	// 	setMeetingStatus("scheduled");
	// };

	const RequestMeeting = async (e: React.FormEvent) => {
        e.preventDefault();

	};

    return (
        <>
            <Button

                bg={"black"}
                color={'white'}
                fontSize={"15"}
                rounded={'md'}
                _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                }}

                onClick={onOpen}>Schedule Meet</Button>
            {/* <Button ml={4} ref={finalRef}>
                I wil receive focus on close
            </Button> */}

            <Modal

                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <Flex bg="brand.300" color={"black"} justifyContent={"center"} p={5}>
                        <Heading fontSize={25}>Schedule a Meet</Heading>
                    </Flex>

                    <ModalCloseButton color={"white"} />
                    <ModalBody pb={6}>

                        <Box p={1} mt={5} >

                            <form onSubmit={RequestMeeting}>


                                <Flex justifyContent={"space-between"}>

                                    <Box width={"160px"}>
                                        <FormLabel fontWeight={800}>No. of Hours</FormLabel>
                                        <Input
                                            mb={7}
                                            type='number'
                                            name='hour'
                                            value={hour}
                                            onChange={(e) => {
                                                setHour(parseInt(`${e.target.value}`));
                                                setTotalPrice(parseInt(`${e.target.value}`) * props.price as number);
                                            }}
                                            ref={initialRef} placeholder='Hours' />
                                        <Input
                                            placeholder="Select Date and Time"
                                            size="md"
                                            name="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value as string)}
                                            type="datetime-local"
                                        />

                                    </Box>
                                    <Box>
                                        <FormLabel fontWeight={800}>Total price</FormLabel>
                                        <Text>{totalPrice}</Text>
                                    </Box>
                                </Flex>

                                <Flex justifyContent={"flex-end"}>
                                    <Button type="submit" onClick={schedule} colorScheme='blue' mr={3}>
                                        Schedule
                                    </Button>
                                    <Button onClick={onClose} bg={"red.500"}>Cancel</Button>
                                </Flex>

                            </form>

                        </Box>


                    </ModalBody>

                    <ModalFooter>
                        <Stack>




                            <Box>
                                {showSuccessMessage && <Text align={"center"} color={"brand.200"} fontWeight={600}>Request Sent Successfully!</Text>}
                                {showFailureMessage && <Text align={"center"} color={"red"} fontWeight={400}>Could not submit the request, please check all the fields and try again!</Text>}
                            </Box>
                        </Stack>



                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ScheduleCall;