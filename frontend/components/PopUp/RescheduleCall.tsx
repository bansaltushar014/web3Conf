import { Box, Button, Flex, FormLabel, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, useColorModeValue, ModalFooter, ModalOverlay, Text, Textarea, useDisclosure, Input, Center, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ethers } from "ethers";

type ReScheduleCallProps = {
    //Wallet adddress of mentee

    // open: boolean;

    // //callback function that doesn't return anything
    // handleClose: () => void;

};

const ReScheduleCall: React.FC<ReScheduleCallProps> = (props) => {

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
        props.updatetime()

    }

    const onsubmit = async () => {
        props.updatetime()

        onClose();

	};

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

    const submitReview = async () => {
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
            daiContractWithSigner.reschedule("1", "45678987");

        }
        onClose()
    }

        return (
        <>
            <Button

                bg={"#6F1AB6"}
                color={'white'}
                fontSize={"15"}
                rounded={'md'}
                _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                }}

                onClick={onOpen}>Reschedule</Button>
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

                            <form onSubmit={handleSubmit}>


                                <Flex justifyContent={"space-between"}>

                                    <Stack >

                                        <FormLabel>Select Date and Time</FormLabel>
                                        <Input
                                            placeholder="Select Date and Time"
                                            size="md"
                                            name="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value as string)}
                                            type="datetime-local"
                                        />



                                        <Flex mt={5} justifyContent={"flex-end"}>
                                            <Button onClick={submitReview} colorScheme='blue' mr={3}>
                                                Schedule
                                            </Button>
                                            <Button onClick={onClose} bg={"red.500"}>Cancel</Button>
                                        </Flex>

                                    </Stack>

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
export default ReScheduleCall;