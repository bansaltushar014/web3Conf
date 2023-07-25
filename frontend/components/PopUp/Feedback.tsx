import {
	Box,
	Button,
	Flex,
	FormLabel,
	Heading,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	useColorModeValue,
	ModalFooter,
	ModalOverlay,
	Text,
	Textarea,
	useDisclosure,
	Input,
	Center,
	Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsArrowUpRight, BsHeartFill, BsHeart } from "react-icons/bs";
import { ethers } from "ethers";

type FeedbackProps = {
	//Wallet adddress of mentee
	// open: boolean;
	// //callback function that doesn't return anything
	// handleClose: () => void;
};


const Feedback: React.FC<FeedbackProps> = () => {
	const [review, setReview] = useState("");
	const [rating, setRating] = useState("");
	const [liked, setLiked] = useState(false);

	const { isOpen, onOpen, onClose } = useDisclosure();

	const initialRef = React.useRef(null);
	const finalRef = React.useRef(null);

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
	};

	const giveFeedback = async (e: React.FormEvent) => {
		e.preventDefault();
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
            daiContractWithSigner.giveFeedback("1", 5);

        }
        onClose()
    }

	return (
		<>
			<Button bg="black" onClick={onOpen} w="10px">
				<Flex
					p={4}
					alignItems="center"
					justifyContent={"space-between"}
					roundedBottom={"sm"}
					borderLeft={"1px"}
					cursor="pointer"
					onClick={() => setLiked(!liked)}>
					{liked ? (
						<BsHeartFill fill="red" fontSize={"24px"} />
					) : (
						<BsHeart fontSize={"24px"} />
					)}
				</Flex>
			</Button>

			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<Flex bg="brand.300" color={"black"} justifyContent={"center"} p={5}>
						<Heading fontSize={25}>Schedule a Meet</Heading>
					</Flex>

					<ModalCloseButton color={"white"} />
					<ModalBody pb={6}>
						<Box p={1} mt={5}>
							<form onSubmit={giveFeedback}>
								<Flex justifyContent={"space-between"}>
									<Stack>
										<FormLabel>Add Review</FormLabel>
										<Input
											placeholder="Add Review"
											size="md"
											name="review"
											value={review}
											onChange={(e) => setReview(e.target.value as string)}
											type="string"
										/>

										<FormLabel>Add Rating</FormLabel>
										<Input
											placeholder="Add Rating"
											size="md"
											name="rating"
											value={rating}
											onChange={(e) => setRating(e.target.value)}
											type="number"
										/>
										<Flex mt={5} justifyContent={"flex-end"}>
											<Button type="submit" onClick={submitReview} colorScheme="blue" mr={3}>
												Send Review
											</Button>
											<Button onClick={onClose} bg={"red.500"}>
												Cancel
											</Button>
										</Flex>
									</Stack>
								</Flex>
							</form>
						</Box>
					</ModalBody>

					<ModalFooter>
						<Stack>
							<Box>
								{showSuccessMessage && (
									<Text align={"center"} color={"brand.200"} fontWeight={600}>
										Request Sent Successfully!
									</Text>
								)}
								{showFailureMessage && (
									<Text align={"center"} color={"red"} fontWeight={400}>
										Could not submit the request, please check all the fields
										and try again!
									</Text>
								)}
							</Box>
						</Stack>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
export default Feedback;
